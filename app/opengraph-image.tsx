import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#efeae0",
          color: "#0d0d0d",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "#0d0d0d99",
          }}
        >
          <div>Makerlab · est. 2011</div>
          <div>Vol. 01</div>
        </div>
        <div
          style={{
            fontSize: 140,
            lineHeight: 0.9,
            letterSpacing: "-0.03em",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>A studio of</span>
          <span>humans making</span>
          <span>
            <span style={{ fontStyle: "italic" }}>strange</span>{" "}
            <span style={{ color: "#ff3b2f" }}>beautiful</span>
          </span>
          <span>useful things.</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "#0d0d0d99",
          }}
        >
          <div>makerlab.com</div>
          <div>us@makerlab.com</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
