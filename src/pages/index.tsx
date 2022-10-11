import { useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../images/logo.png";
import kontur2 from "../images/2.png";
import kontur3 from "../images/3.png";
import kontur4 from "../images/4.png";

function Default() {
  const { name } = useParams();
  const [tipShown, showTip] = useState(false);

  const dana = "081286515812";
  const mandiri = "1780001823778";

  return (
    <>
      {tipShown ? (
        <p className="fixed bottom-10 left-1/2 -translate-x-1/2 rounded-lg bg-[#fafafa] px-4 py-1 font-semibold">
          Coppied!
        </p>
      ) : (
        ""
      )}
      <div
        className="relative flex h-full flex-col bg-[#293042] bg-center text-white"
        style={{ backgroundImage: `url(${kontur2})` }}
      >
        <div className="flex flex-grow items-center justify-center">
          <div className="text-center">
            <p className="text-xl font-bold">Halo, {name || "Aer's"}</p>
            <p>Mari dateng ke</p>
            <div className="mx-auto my-2 w-[190px]">
              <img
                src={logo}
                className="w-full rounded-full"
                alt="Hari ulang tahun ke 30 astacala"
              />
            </div>
            <div className="mt-2 flex flex-wrap items-center justify-center">
              <a
                className="mx-1 mt-1"
                href="https://maps.app.goo.gl/BFixh46yVoKSiWX56"
              >
                <p className="rounded-lg bg-[#fafafa] px-4 py-2 text-black">
                  Lokasi
                </p>
              </a>
              <a className="mx-1 mt-1" href="https://wa.me/6281224244263">
                <p className="rounded-lg bg-[#fafafa] px-4 py-2 text-black">
                  Contact person
                </p>
              </a>
              <a
                className="mx-1 mt-1"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfMI1f8GruBIN0rvk9VtceMjBAyUSrPjKjPt5KS1QcQX8Ul-w/viewform"
              >
                <p className="rounded-lg bg-[#fafafa] px-4 py-2 text-black">
                  Konfirmasi Kehadiran
                </p>
              </a>
              <a
                className="mx-1 mt-1"
                href="https://docs.google.com/spreadsheets/d/1_E6D1_O5FoYhI-dcoN1CvaaReYHIlwY93by_waOIDQI/edit?usp=sharing"
              >
                <p className="rounded-lg bg-[#fafafa] px-4 py-2 text-black">
                  Daftar Hadir
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex h-full flex-col bg-[#293042] bg-center text-white"
        style={{ backgroundImage: `url(${kontur3})` }}
      >
        <div className="flex flex-grow items-center justify-center">
          <div className="text-center">
            <p className="font-semibold">Tanggal : Sabtu, 15-16 October 2022</p>
            <h1 className="font-semibold">
              Rangkaian acara ulang tahun ASTACALA ke 30
            </h1>
            <ul className="my-2">
              <li>Fun Games</li>
              <li>Makan bersama</li>
              <li>Sharing session</li>
              <li>Api persaudaraan</li>
              <li>Barbeque</li>
              <li>Senam Bersama</li>
              <li>Foto besama</li>
            </ul>

            <div className="mt-2 flex flex-wrap items-center justify-center">
              <a
                className="mx-1 mt-1"
                href="https://maps.app.goo.gl/BFixh46yVoKSiWX56"
              >
                <p className="rounded-lg bg-[#fafafa] px-4 py-2 text-black">
                  Lokasi
                </p>
              </a>
              <a className="mx-1 mt-1" href="https://wa.me/6281224244263">
                <p className="rounded-lg bg-[#fafafa] px-4 py-2 text-black">
                  Contact person
                </p>
              </a>
              <a
                className="mx-1 mt-1"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfMI1f8GruBIN0rvk9VtceMjBAyUSrPjKjPt5KS1QcQX8Ul-w/viewform"
              >
                <p className="rounded-lg bg-[#fafafa] px-4 py-2 text-black">
                  Konfirmasi Kehadiran
                </p>
              </a>
              <a
                className="mx-1 mt-1"
                href="https://docs.google.com/spreadsheets/d/1_E6D1_O5FoYhI-dcoN1CvaaReYHIlwY93by_waOIDQI/edit?usp=sharing"
              >
                <p className="rounded-lg bg-[#fafafa] px-4 py-2 text-black">
                  Daftar Hadir
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex h-full flex-col items-center justify-center  bg-[#293042] bg-center text-center text-white"
        style={{ backgroundImage: `url(${kontur4})` }}
      >
        <p className="mt-4 mb-4 text-center text-2xl font-bold">
          Patungan Kuluk Kuluk
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
            <p
              className="border border-black bg-black px-4 py-1"
              onClick={() => {
                navigator.clipboard.writeText(mandiri);

                showTip(true);
                setTimeout(() => showTip(false), 2000);
              }}
            >
              <p>{mandiri}</p>
            </p>
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
            <p
              className="border border-black bg-black px-4 py-1"
              onClick={() => {
                navigator.clipboard.writeText(dana);

                showTip(true);
                setTimeout(() => showTip(false), 2000);
              }}
            >
              <p>{dana}</p>
            </p>
          </div>
        </div>
        <p className="mt-1 text-xl">a.n. Shusmita Sahara</p>
        <a
          className="mt-2 rounded-lg bg-[#fafafa] px-4 py-1 text-black"
          href="https://wa.me/6281286515812"
        >
          Konfirmasi Donasi
        </a>
      </div>
    </>
  );
}

export default Default;
