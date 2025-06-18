"use client";

import { Button } from "@/app/components/ui/button";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";

gsap.registerPlugin(DrawSVGPlugin);

function Loader() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const mid = gsap.utils.toArray("#mid *").reverse();

    const fatTl = gsap.timeline();
    fatTl.fromTo(
      "#fat *",
      {
        drawSVG: "0% 20%",
      },
      {
        drawSVG: "40% 69%",
        stagger: {
          each: 0.05,
          repeat: -1,
          yoyo: true,
        },
        duration: 0.75,
        ease: "sine.inOut",
      }
    );

    const midTl = gsap.timeline();
    midTl.fromTo(
      mid,
      {
        drawSVG: "0% 20%",
      },
      {
        drawSVG: "56% 86%",
        stagger: {
          each: 0.08,
          repeat: -1,
          yoyo: true,
        },
        duration: 0.81,
        ease: "sine.inOut",
      }
    );

    const thinTl = gsap.timeline();
    thinTl.fromTo(
      "#thin *",
      {
        drawSVG: "20% 51%",
      },
      {
        drawSVG: "40% 80%",
        stagger: {
          each: 0.092,
          repeat: -1,
          yoyo: true,
        },
        duration: 1.4,
        ease: "sine.inOut",
      }
    );

    const mainTl = gsap.timeline();
    mainTl.add([fatTl, midTl, thinTl], 0);

    return () => {
      mainTl.kill();
    };
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        ref={svgRef}
        id="mainSVG"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
        className="w-100 h-100"
        role="img"
        aria-label="Loading animation"
      >
        <title>Loading animation</title>

        <linearGradient
          id="grad1"
          x1="393.05"
          y1="400"
          x2="393.05"
          y2="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#3D28F7" />

          <stop offset="1" stopColor="#FF3C20" />
        </linearGradient>

        <linearGradient
          id="grad2"
          x1="393.05"
          y1="391.01"
          x2="393.05"
          y2="247.71"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#F72785" />

          <stop offset="1" stopColor="#FFEE2A" />
        </linearGradient>

        <linearGradient
          id="grad3"
          x1="393.05"
          y1="400"
          x2="393.05"
          y2="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#FF6820" />

          <stop offset="1" stopColor="#D1FE21" />
        </linearGradient>

        <linearGradient
          id="grad4"
          x1="393.05"
          y1="400"
          x2="393.05"
          y2="250"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#35AAF9" />

          <stop offset="1" stopColor="#993BDC" />
        </linearGradient>

        <g>
          <g
            id="bg"
            stroke="url(#grad3)"
            fill="none"
            strokeLinecap="round"
            strokeMiterlimit="10"
          >
            <path d="M594.5,250v-.29L594.6,350" />

            <line x1="580.5" y1="390" x2="580.32" y2="210" />

            <line x1="565.5" y1="415" x2="565.28" y2="185" />

            <line x1="550.5" y1="434" x2="550.24" y2="166" />

            <line x1="535.5" y1="449" x2="535.22" y2="151" />

            <line x1="520.5" y1="462" x2="520.2" y2="138" />

            <line x1="505.5" y1="472" x2="505.18" y2="128" />

            <line x1="490.5" y1="480" x2="490.16" y2="120" />

            <line x1="475.5" y1="487" x2="475.14" y2="113" />

            <line x1="460.5" y1="492" x2="460.14" y2="108" />

            <line x1="445.5" y1="496" x2="445.12" y2="104" />

            <line x1="430.5" y1="499" x2="430.12" y2="101" />

            <line x1="415.5" y1="501" x2="415.12" y2="99" />

            <line x1="400.5" y1="501" x2="400.12" y2="99" />

            <line x1="385.5" y1="501" x2="385.12" y2="99" />

            <line x1="370.5" y1="499" x2="370.12" y2="101" />

            <line x1="355.5" y1="496" x2="355.12" y2="104" />

            <line x1="340.5" y1="492" x2="340.14" y2="108" />

            <line x1="325.5" y1="487" x2="325.14" y2="113" />

            <line x1="310.5" y1="480" x2="310.16" y2="120" />

            <line x1="295.5" y1="472" x2="295.18" y2="128" />

            <line x1="280.5" y1="462" x2="280.2" y2="138" />

            <line x1="265.5" y1="449" x2="265.22" y2="151" />

            <line x1="250.5" y1="434" x2="250.24" y2="166" />

            <line x1="235.5" y1="415" x2="235.28" y2="185" />

            <line x1="220.5" y1="390" x2="220.32" y2="210" />

            <polyline points="204.5 250 204.5 350.29 204.5 350" />
          </g>

          <g
            id="thin"
            stroke="url(#grad1)"
            fill="none"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          >
            <path d="M594.6,350l-.1-100.29V250" />

            <line x1="580.5" y1="390" x2="580.32" y2="210" />

            <line x1="565.5" y1="415" x2="565.28" y2="185" />

            <line x1="550.5" y1="434" x2="550.24" y2="166" />

            <line x1="535.5" y1="449" x2="535.22" y2="151" />

            <line x1="520.5" y1="462" x2="520.2" y2="138" />

            <line x1="505.5" y1="472" x2="505.18" y2="128" />

            <line x1="490.5" y1="480" x2="490.16" y2="120" />

            <line x1="475.5" y1="487" x2="475.14" y2="113" />

            <line x1="460.5" y1="492" x2="460.14" y2="108" />

            <line x1="445.5" y1="496" x2="445.12" y2="104" />

            <line x1="430.5" y1="499" x2="430.12" y2="101" />

            <line x1="415.5" y1="501" x2="415.12" y2="99" />

            <line x1="400.5" y1="501" x2="400.12" y2="99" />

            <line x1="385.5" y1="501" x2="385.12" y2="99" />

            <line x1="370.5" y1="499" x2="370.12" y2="101" />

            <line x1="355.5" y1="496" x2="355.12" y2="104" />

            <line x1="340.5" y1="492" x2="340.14" y2="108" />

            <line x1="325.5" y1="487" x2="325.14" y2="113" />

            <line x1="310.5" y1="480" x2="310.16" y2="120" />

            <line x1="295.5" y1="472" x2="295.18" y2="128" />

            <line x1="280.5" y1="462" x2="280.2" y2="138" />

            <line x1="265.5" y1="449" x2="265.22" y2="151" />

            <line x1="250.5" y1="434" x2="250.24" y2="166" />

            <line x1="235.5" y1="415" x2="235.28" y2="185" />

            <line x1="220.5" y1="390" x2="220.32" y2="210" />

            <polyline points="204.5 350 204.5 350.29 204.5 250" />
          </g>

          <g
            id="mid"
            stroke="url(#grad2)"
            fill="none"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="4"
          >
            <path d="M594.6,350l-.1-100.29V250" />

            <line x1="580.5" y1="390" x2="580.32" y2="210" />

            <line x1="565.5" y1="415" x2="565.28" y2="185" />

            <line x1="550.5" y1="434" x2="550.24" y2="166" />

            <line x1="535.5" y1="449" x2="535.22" y2="151" />

            <line x1="520.5" y1="462" x2="520.2" y2="138" />

            <line x1="505.5" y1="472" x2="505.18" y2="128" />

            <line x1="490.5" y1="480" x2="490.16" y2="120" />

            <line x1="475.5" y1="487" x2="475.14" y2="113" />

            <line x1="460.5" y1="492" x2="460.14" y2="108" />

            <line x1="445.5" y1="496" x2="445.12" y2="104" />

            <line x1="430.5" y1="499" x2="430.12" y2="101" />

            <line x1="415.5" y1="501" x2="415.12" y2="99" />

            <line x1="400.5" y1="501" x2="400.12" y2="99" />

            <line x1="385.5" y1="501" x2="385.12" y2="99" />

            <line x1="370.5" y1="499" x2="370.12" y2="101" />

            <line x1="355.5" y1="496" x2="355.12" y2="104" />

            <line x1="340.5" y1="492" x2="340.14" y2="108" />

            <line x1="325.5" y1="487" x2="325.14" y2="113" />

            <line x1="310.5" y1="480" x2="310.16" y2="120" />

            <line x1="295.5" y1="472" x2="295.18" y2="128" />

            <line x1="280.5" y1="462" x2="280.2" y2="138" />

            <line x1="265.5" y1="449" x2="265.22" y2="151" />

            <line x1="250.5" y1="434" x2="250.24" y2="166" />

            <line x1="235.5" y1="415" x2="235.28" y2="185" />

            <line x1="220.5" y1="390" x2="220.32" y2="210" />

            <polyline points="204.5 350 204.5 350.29 204.5 250" />
          </g>

          <g
            id="fat"
            stroke="url(#grad4)"
            fill="none"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="7"
          >
            <path d="M594.6,350l-.1-100.29V250" />

            <line x1="580.5" y1="390" x2="580.32" y2="210" />

            <line x1="565.5" y1="415" x2="565.28" y2="185" />

            <line x1="550.5" y1="434" x2="550.24" y2="166" />

            <line x1="535.5" y1="449" x2="535.22" y2="151" />

            <line x1="520.5" y1="462" x2="520.2" y2="138" />

            <line x1="505.5" y1="472" x2="505.18" y2="128" />

            <line x1="490.5" y1="480" x2="490.16" y2="120" />

            <line x1="475.5" y1="487" x2="475.14" y2="113" />

            <line x1="460.5" y1="492" x2="460.14" y2="108" />

            <line x1="445.5" y1="496" x2="445.12" y2="104" />

            <line x1="430.5" y1="499" x2="430.12" y2="101" />

            <line x1="415.5" y1="501" x2="415.12" y2="99" />

            <line x1="400.5" y1="501" x2="400.12" y2="99" />

            <line x1="385.5" y1="501" x2="385.12" y2="99" />

            <line x1="370.5" y1="499" x2="370.12" y2="101" />

            <line x1="355.5" y1="496" x2="355.12" y2="104" />

            <line x1="340.5" y1="492" x2="340.14" y2="108" />

            <line x1="325.5" y1="487" x2="325.14" y2="113" />

            <line x1="310.5" y1="480" x2="310.16" y2="120" />

            <line x1="295.5" y1="472" x2="295.18" y2="128" />

            <line x1="280.5" y1="462" x2="280.2" y2="138" />

            <line x1="265.5" y1="449" x2="265.22" y2="151" />

            <line x1="250.5" y1="434" x2="250.24" y2="166" />

            <line x1="235.5" y1="415" x2="235.28" y2="185" />

            <line x1="220.5" y1="390" x2="220.32" y2="210" />

            <polyline points="204.5 350 204.5 350.29 204.5 250" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export function ImageUploader({ experienceId }: { experienceId: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const [altText, setAltText] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = async () => {
    if (!altText) return;

    try {
      await navigator.clipboard.writeText(altText);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (!file) return;

      setIsLoading(true);
      setError(null);
      setAltText(null);

      try {
        const formData = new FormData();
        formData.append("file", file);

        // Get the user's API key from localStorage
        const userApiKey = localStorage.getItem("openai_api_key");

        const response = await fetch(
          `/api/experiences/${experienceId}/generate`,
          {
            method: "POST",
            body: formData,
            headers: {
              ...(userApiKey && { "x-openai-api-key": userApiKey }),
            },
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to generate alt text");
        }

        const data = await response.json();
        setAltText(data.altText);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    },
    [experienceId]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg"],
    },
    maxFiles: 1,
  });

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
          isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
        }`}
      >
        <input {...getInputProps()} />
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <p className="text-lg mb-2">
              {isDragActive
                ? "Drop the image here"
                : "Drag and drop an image here, or click to select"}
            </p>
            <p className="text-sm text-gray-500">
              Supports PNG, JPG, JPEG up to 10MB
            </p>
          </div>
        )}
      </div>

      {error && (
        <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      {altText && (
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-start mb-4">
            <p className="text-gray-700 whitespace-pre-wrap flex-1">
              {altText}
            </p>
            <Button
              onClick={copyToClipboard}
              variant="outline"
              className="ml-4 flex-shrink-0"
              title={copySuccess ? "Copied!" : "Copy to clipboard"}
            >
              {copySuccess ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-500"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
              )}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
