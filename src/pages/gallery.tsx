import * as React from "react";
import { ContentLayout } from "../components";

/*
Tip: get image data from directed directory "/images/"

{
  allFile(filter: {absolutePath: {regex: "/images/"}}) {
    nodes {
      publicURL
    }
  }
}

 */

export default () => (
  <ContentLayout>
    <h1>Gallery</h1>
  </ContentLayout>
);
