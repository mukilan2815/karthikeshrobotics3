import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Shopcard = () => {
  return (
    <div className="w-48 pt-10 max-w-sm rounded-lg shadow">
      <a href="#">
        <img
          className="p-2 rounded-lg bg-white"
          src="https://s3-alpha-sig.figma.com/img/5d5c/2e52/50752d55f8b60f2aa2923183dadbc135?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c9kIMKN9TFfi9RWzoZ3aUPCqL9DKz8x4kpc5Mc5dSmFCRECcWaSiCeKwnyNd8hnhjunRzVqKtrufqAPULgT06rzqqyDMDNCP-zWVxoOqiKWu7EniqinW7PDH2bkystvxAvu6gRP9pZ9Ml7g8p4TfOgyJF4GxpchWadla3XT54w7kIxeeV3WO-JB1qeaPZ3zlXW2ikAB649dUKG5idiwLyR205TZvykTiy0aitFJuSd5htE9SJBED73AKjlIYmx6ol6jw4lR0SkNDnvQtfaKEekHYCUzWHIHmshdd5iDwNglqkaDGywbcrQnac6eSSgE0xz3SPygGag1LlYlp6h1pjw__"
          alt="product image"
        />
      </a>
      <div className="text-white">
        <h4>HAVIT HV-G92 Gamepad</h4>
        <div className="flex space-x-2">
          <p className="text-[#C8FF2D] font-bold">$120</p>
          <p className=" line-through text-gray-500">$160</p>
        </div>
        <div className="flex items-center my-2 space-x-4">
          <div className="flex items-center w-20">
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          </div>
          <p>(88)</p>
        </div>
      </div>
    </div>
  );
};

export default Shopcard;
