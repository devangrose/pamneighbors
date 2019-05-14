import React from 'react';
import { Helmet } from 'react-helmet';

export const googleTagId = 'TBA';
export const googleAnalyticsId = 'TBA';

export const homeTags = [];
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
