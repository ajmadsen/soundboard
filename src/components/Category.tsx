import React from 'react';

import Button from 'components/Button';
import { Clip } from 'index.d';

type Props = {
  categoryName: string;
  clips: Clip[];
};

function Category({ categoryName, clips }: Props) {
  return (
    <div className="soundboard-category">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{categoryName}</h3>
          {clips.map(clip => (
            <Button key={clip.file} clipName={clip.name} fileName={clip.file} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
