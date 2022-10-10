import { useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../images/logo.png";
import kontur from "../images/1.png";

function Default() {
  const { name } = useParams();
  const [tipShown, showTip] = useState(false);

  const dana = "081286515812";
  const mandiri = "1780001823778";

  return (
    <>
      {tipShown ? (
        <p className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-[#fafafa] rounded-lg font-semibold px-4 py-1">Coppied!</p>
      ) : (
        ""
      )}
      <div className="flex h-full flex-col bg-[#293042] text-white bg-center" style={{backgroundImage: `url(${kontur})`}}>
        {/* Some header */}
        <div className="flex flex-grow items-center justify-center">
          <div className="text-center">
            <p className="text-xl font-bold">Hello, {name}</p>
            <p>You're invited to</p>
            <div className="mx-auto my-2 w-[190px]">
              <img src={logo} className="w-full rounded-full" />
            </div>
            <p>Date : 17 October 2022</p>
            <div className="mt-2 flex items-center justify-center">
              <a className="mx-1">
                <p className="rounded-lg bg-[#fafafa] px-4 py-2 text-black">
                  Location
                </p>
              </a>
              <a className="mx-1" href="https://wa.me/628161461151">
                <p className="rounded-lg bg-[#fafafa] px-4 py-2 text-black">
                  Contact person
                </p>
              </a>
            </div>
          </div>
        </div>
        <p className="text-center">Please come with us with happines</p>
        {/* Some footer */}
      </div>

      <div className="flex h-full flex-col items-center justify-center bg-[#293042] text-center text-white">
        <p className="mt-4 mb-4 text-center text-2xl font-bold">
          Want to donate?
        </p>
        <div className="flex">
          <div className="mx-1">
            <div
              className="mx-auto mb-2 w-min rounded-lg bg-[#fafafa] text-black"
              onClick={() => {
                navigator.clipboard.writeText(mandiri);

                showTip(true);
                setTimeout(() => showTip(false), 2000);
              }}
            >
              <p className="px-4 py-1">Mandiri</p>
            </div>
            <button
              className="border border-black px-4 py-1"
              onClick={() => {
                navigator.clipboard.writeText(mandiri);

                showTip(true);
                setTimeout(() => showTip(false), 2000);
              }}
            >
              <p>{mandiri}</p>
            </button>
          </div>
          <div className="mx-1">
            <div
              className="mx-auto mb-2 w-min rounded-lg bg-[#fafafa] text-black"
              onClick={() => {
                navigator.clipboard.writeText(dana);

                showTip(true);
                setTimeout(() => showTip(false), 2000);
              }}
            >
              <p className="px-4 py-1">Dana</p>
            </div>
            <button
              className="border border-black px-4 py-1"
              onClick={() => {
                navigator.clipboard.writeText(dana);

                showTip(true);
                setTimeout(() => showTip(false), 2000);
              }}
            >
              <p>{dana}</p>
            </button>
          </div>
        </div>
        <p className="mt-1 text-xl">a.n. Shusmita Sahara</p>
        <a
          className="mt-2 rounded-lg bg-[#fafafa] px-4 py-1 text-black"
          href="https://wa.me/6281286515812"
        >
          Confirmation
        </a>
      </div>
    </>
  );
}

export default Default;
