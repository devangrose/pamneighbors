import React from 'react';
import { Helmet } from 'react-helmet';

export const googleTagId = 'GTM-K3VLBCK';
export const googleAnalyticsId = 'UA-58654811-1';

//----------------- SETH --------------//
//       Here is an example tag object //
//
//       { name: "charset", content: "utf-8" } //
//
//       I've put a test meta in the home page 
//       so you can see what I need

export const homeTags = [ 
  { name: "charset", content: "utf-8" }, 
  { name: "Devan", content: "Grose" },
];
export const contactTags = [];
export const transformationsTags = [];
export const faqTags = [];
export const teamTags = [];
export const pricingTags = [];
export const trainingTags = [];
export const blogTags = [];

export const menHairLossTreatment = [];
export const menAlopecia = [];
export const menScalpScars = [];
export const womenHairLossTreatment = [];
export const womenAlopecia = [];
export const eyebrows = [];
export const eyeliner = [];
export const lips = [];
export const microneedling = [];



// Need to have this as a breakout function because lambda functions don't like JSX
function makeTag(name, content) {
    return <meta name={name} content={content}/>
}

export function makeMetaTags(tags) {
    return <Helmet> { tags.map(tag => makeTag(tag.name, tag.content)) } </Helmet>;
}
