import React from "react";

function Meeting({ params }: { params: { id: string } }) {
  return (
    <div>
      <p className="text-3xl">
        Meeting {params.id}
      </p>
    </div>
  );
}

export default Meeting;

