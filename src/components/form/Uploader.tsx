/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { FileInput, Label } from 'flowbite-react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

import { getSession } from 'next-auth/react';
import { notifyError, notifySuccess } from '@/utils/toast';

type User = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  token?: string;
};

type Session = {
  user?: User;
};

export default function Uploader({
  image,
  changeImage,
}: {
  image: any;
  changeImage: (_files: FileList | null) => void;
}) {
  const [files, setFiles] = useState<(File & { preview: string })[]>([]);

  const { getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    multiple: false,
    maxSize: 500000,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
    },
  });

  const uploadImage = async (file: File) => {
    const session: Session | null = await getSession();
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await axios({
        url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}asset`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${session?.user?.token}`,
        },
        data: formData,
      });
      changeImage(res.data.data);
      notifySuccess('Image uploaded successfully');
    } catch (err: any | unknown) {
      if (Array.isArray(err.response.data.message)) {
        notifyError(err.response.data.message.join('\n'));
      } else notifyError(err ? err.response.data.message : err.message);
    }
  };

  useEffect(() => {
    if (files) {
      files.forEach((file: File & { preview: string }) => {
        uploadImage(file);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files]);

  const thumbs = files.map((file: File & { preview: string }) => (
    <div key={file.name}>
      <div className=" relative mt-3 flex h-auto w-28 items-center overflow-hidden rounded-md border border-indigo-200 p-1">
        <img
          className=" rounded-md object-cover"
          src={file.preview}
          alt={file.name}
        />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file: File & { preview: string }) =>
        URL.revokeObjectURL(file.preview),
      );
    },
    [files],
  );

  return (
    <div>
      <div
        className="flex w-full items-center justify-center"
        // {...getRootProps()}
      >
        <Label
          htmlFor="dropzone-file"
          className="dark:hover:bg-bray-800 flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <svg
              className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="#10B981"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm font-normal leading-3 text-gray-500 dark:text-gray-400">
              <span className=" font-semibold text-gray-800">
                Click to upload
              </span>{' '}
              or drag and drop
            </p>

            <p className=" text-xs font-normal text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <FileInput
            {...getInputProps()}
            id="dropzone-file"
            className="hidden"
          />
        </Label>
      </div>
      {image ? (
        <div className=" relative mt-3 flex h-auto w-28 items-center overflow-hidden rounded-md border border-indigo-200 p-1">
          <img
            className=" rounded-md object-cover"
            src={process.env.NEXT_PUBLIC_API_ENDPOINT + image.fileName}
            alt="previewer"
          />
        </div>
      ) : (
        thumbs
      )}
    </div>
  );
}
