import React from 'react';
import Typography from './Typography';

function PageTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-4 flex flex-col justify-between md:flex-row md:items-center">
      <div className="flex-1">
        <Typography variant="h3" className="mb-2">
          {title}
        </Typography>

        <Typography variant="small" className="text-gray-600">
          {subtitle}
        </Typography>
      </div>
    </div>
  );
}

PageTitle.defaultProps = {
  subtitle: '',
};

export default PageTitle;
