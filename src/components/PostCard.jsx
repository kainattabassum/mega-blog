import React from "react";
import { Link } from "react-router-dom";
import dbService from "../appwrite/config";

function PostCard({ $id, title, featureImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full flex justify-center mn-4">
          <img
            src={dbService.getFilePreview(featureImage)}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <h4 className="text-xl font-bold">{title}</h4>
      </div>
    </Link>
  );
}

export default PostCard;
