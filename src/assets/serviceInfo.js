import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import Expansion from '../Components/Expansion.js';

import manBanner from './banner-smp.jpg';
import womanBanner from './banner-lips.jpg';

import redColor from '../color.js';

import menAlopeciaImages from '../assets/mens-alopecia.js';
import menHairLossImages from '../assets/mens-hairloss.js';
import menTransplantImages from '../assets/mens-transplant.js';
import womenHairLossImages from '../assets/women-hairloss.js';
import womenAlopeciaImages from '../assets/women-alopecia.js';
import eyebrowImages from '../assets/eyebrows.js';
import threeDEyebrowsImages from '../assets/3deyebrows.js';
import eyelinerImages from '../assets/eyeliner.js';
import lipsImages from '../assets/lips.js';

import rejuvapen from '../assets/rejuvapen.jpg';
const services = [ 

  {
    'url':'women/alopecia',
    'banner':womanBanner,
    'gender':'woman',
    'category': 'Women\'s Alopecia',
    'name': 'Scalp Micropigmentation',
    'images': womenAlopeciaImages,
    'img':( <img alt="women alopecia" src={womenAlopeciaImages[0].img} style={{width: "100%", height: "auto"}}/>),
    'firstParagraph': () => {
      return(
        <div>
          <Typography variant="h4">
            Hair Loss Treatment for Alopecia
          </Typography>
          <Typography variant="h5">
            <br />
            Though Alopecia effects 1 in every 1,000 people in the U.S.*, finding the best solutions for hair loss can be so challenging that it magnifies the psychological effects of the disease.
            <br />
            <br />
            Though there are a number of medical treatwoments for Alopecia, there are often limited long-term effects for many of them. Most of these treatments either take months to show results or become ineffective after initial success. In the meantime, the Alopecia patient often suffers from depression, social phobia, or anxiety.
          </Typography>
        </div>
    )
    },
    'secondParagraph':() => {
      return (
        <div style={{paddingTop: "50px"}}>
          <Typography variant="h4" style={{margin: '5%', marginBottom:"30px"}}>
            SMP offers an advanced, cutting edge solution for people who struggle with Alopecia!
          </Typography>
          <hr style={{width: "60%", marginBottom: "40px", marginTop: "40px"}}/>
          <Typography variant="h5" style={{textAlign: "center", margin: "5%", marginBottom:"30px"}}>
            For women and women who suffer hair loss from Alopecia, Traction Alopecia, chemotherapy, or radiation, SMP offers a cutting edge, natural looking alternative. For men, SMP can produce a natural buzz cut or edged up look. For women, SMP can simulate hair follicles beneath thinning hair, resulting in fuller looking hair with a far less patchy appearance. SMP can also be used as to bridge the time period of regrowth for chemotherapy or radiation patients.
          </Typography>
        </div>
      )
    },
  },

  {
    'url': 'women/hair-loss-treatment',
    'banner':womanBanner,
    'gender':'woman',
    'category': 'Women\'s Hair Loss Treatment',
    'images': womenHairLossImages,
    'img':( <img alt="Womens hair loss" src={womenHairLossImages[0].img} style={{width: "100%", height: "auto"}}/>),
    'name': 'Scalp Micropigmentation',
    'firstParagraph': () => {
      return (
        <div>
          <Typography variant="h4">
            Scalp Micropigmentation For Women
          </Typography>
          <br />
          <Typography variant="h5">
            Women with thinning hair are also candidates for SMP.
          </Typography>
          <Typography variant="h5">
            When a woman realizes that she is losing her hair it can be devastating. Regardless of the reason, she should seek medical attention to try to remedy the situation. If a medical solution is not an option, then SMP is highly recommended. Pigment expertly applied to the scalp to replicate follicles will give the look of thicker, more abundant hair, thus restoring confidence and femininity in an otherwise desperate situation.
          </Typography>
          <br />
          <br />
          <Typography variant="h5">
            Female pattern baldness is different than male pattern baldness. Typically, the frontal hairline is maintained. The hair thins out over the top of the head, and may thin out over the crown area, but usually does not progress to the extent that occurs in men. Since the contrast between the scalp and the hair makes the thinning more apparent, SMP treatments provide the look of more follicles, adding density to the scalp
          </Typography>
          <br />
          <br />
        </div>
      )
    },
    'secondParagraph': () => {
      return (
        <div style={{marginBottom: "50px", paddingTop: "50px"}}>
          <div style={{margin: "5%", marginBottom: "20px"}}>
            <Typography variant="h4" style={{color: redColor}}>
              Scalp Micropigmentation For Women
            </Typography>
            <br />
            <br />
            <Expansion 
              heading="Traction Alopecia" 
              details={
                <div>
                  <Typography variant="h5">
                    Traction alopecia occurs when there is undo stress placed upon the hair follicles. Tight braids, ponytails, weaves and hair extensions can sometimes cause enough trauma to the scalp that the sufferer experiences recession of hair at the hairline or patchy baldness throughout the scalp.
                  </Typography>
                  <br />
                  <br />
                  <Typography variant="h5">
                    SMP treatments can effectively hide thinned areas and restore fullness to the hairline.
                  </Typography>
                  <br />
                  <br />
                  <Typography variant="h5">
                    40-50% of women experience thinning of their hair. It is more common than most people think! Scalp micropigmentation is a quick, minimally invasive solution to a thicker head of hair.
                  </Typography>
                  <br />
                  <br />
                </div>
            }/>
            <div style={{marginTop: "20px"}}>
              <Expansion 
                heading="A Window Into the Female SMP Process"
                details={
                  <div>
                    <br />
                    <Typography variant="h5">
                      This female client came to us looking for relief from her thinning hair.
                    </Typography>
                    <br />
                    <br />
                    <Typography variant="h5">
                      She has family history of female pattern balding and also noticed increased loss of hair following hormone treatment.
                    </Typography>
                    <br />
                    <br />
                    <Typography variant="h5">
                      Her story is like many other women. Depression, weight gain and lack of confidence are among many symptoms she has experienced.
                    </Typography>
                    <br />
                    <br />
                    <Typography variant="h5">
                      We have consulted with her over the phone. This is our first face to face meeting, and first treatment day.
                    </Typography>
                    <div style={{textAlign: "center", margin: "50px"}}>
                      <iframe width="930" height="522" title="women hair loss video" src="https://www.youtube.com/embed/82PE7EbC8bY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                  </div>
                }/>
            </div>
          </div>
        </div>
      )
    },
  },
    {
    'url': 'women/eyebrows',
    'banner':womanBanner,
    'gender':'woman',
    'category': 'Gorgeous Eyebrows',
    'name': 'Scalp Micropigmentation',
    'images': eyebrowImages,
    'img':( <img alt="scalp micropigmentation" src={eyebrowImages[0].img} style={{width: "100%", height: "auto"}}/>),
    'firstParagraph': () => {
      return (
        <div>
          <Typography variant="h5">
            Eyebrows with issues such as being too light, too thin or non-existent can be filled in to look completely natural and with no need for additional makeup.
          </Typography>
          <br />
          <br />
          <Typography variant="h5">
            Permanent cosmetics are for the active person, at work or at play! You can have that natural look 24 hours a day with no preparation time. Permanent cosmetics will enhance your beauty or camouflage imperfections. If you are allergic to cosmetics, wear contact lenses, enjoy athletic activities or have limited dexterity then this is the solution for you!
          </Typography>
        </div>
      )
    },
    'secondParagraph': () => {
      return (
        <div style={{marginBottom: "50px", paddingTop: "50px"}}>
          <div style={{margin: "5%"}}>
            <Typography variant="h4" style={{color: redColor}}>
              What Are Permanent Cosmetics?
            </Typography>
            <br />
            <br />
            <Typography variant="h5">
              Permanent cosmetics are natural pigments that are implanted into the skin to enhance various facial features, using a tattoo process.
            </Typography>
            <br />
            <Typography variant="h4" style={{color: redColor}}>
              What Will I Feel?
            </Typography>
            <br />
            <br />
            <Typography variant="h5">
              A topical anesthetic is used to numb the area, though some will feel a light burning sensation.
            </Typography>
            <br />
            <br />
            <Typography variant="h4" style={{color: redColor}}>
              Is It Safe?
            </Typography>
            <br />
            <br />
            <Typography variant="h5">
              Yes, the procedure is provided in a sanitary environment and all instruments are sterilized and disposable.
            </Typography>
          </div>
        </div>
      )
    },
  },
  {
    'url': 'women/3d-eyebrows',
    'banner':womanBanner,
    'gender':'woman',
    'category': '3D Hair Stroke Eyebrows',
    'name': '3d Eyebrows',
    'images': threeDEyebrowsImages,
    'img':( <img alt="three d eyebrows" src={threeDEyebrowsImages[0].img} style={{width: "100%", height: "auto"}}/>),
    'firstParagraph': () => {
      return (
        <div>
          <Typography variant="h5">
            Why has the “Eyebrow Craze” suddenly gone viral…
          </Typography>
          <br />
          <br />
          <Typography variant="h5">
            For years, women and some men have been enjoying the benefits of cosmetic tattooing; eyebrows, eyeliner and lip color to be precise; permanent tattoos that replace makeup.
          </Typography>
          <br />
          <br />
          <Typography variant="h5">
            Within the past few years, a huge new movement within the permanent makeup industry has arisen.  The “Eyebrow Craze” has been catapulted into mainstream permanent cosmetics procedures by the emergence of a procedure know as microblading.  Microblading, also known as micro-strokes, eyebrow embroidery, brow etching and a few other names are now appearing as searchable names on the Internet.
          </Typography>
          <br />
          <br />
          <Typography variant="h5">
            The microblading of eyebrows is a technique where a tattoo that simulates a hair is etched into the skin with a tool consisting of several tiny needles lined up to resemble a blade.  The tool is dipped into a pigment and dragged through the skin leaving pigment in the wound.
          </Typography>

        </div>
      )
    },
    'secondParagraph': () => {
      return (
        <div style={{marginBottom: "50px", paddingTop: "50px"}}>
          <div style={{margin: "5%"}}>
            <Typography variant="h4" style={{color: redColor}}>
              How Long Will it Last?
            </Typography>
            <br />
            <br />
            <Typography variant="h5">
              Microblade tattooing has a lifespan of approximately 6 months to a year depending upon the depth of the implanted color; and the final results are ultimately determined by the skill of the operator.
            </Typography>
            <br />
            <br />
            <Typography variant="h5">
              Many young women opt for microbladed eyebrows/micro-stroke eyebrows because it’s touted as semi-permanent. These women are concerned that in the future that either their preferences or the design trend will change.
            </Typography>
            <br />
            <br />
            <Typography variant="h5">
              Microblading apprehensions that come to mind are noted below.  However, have you been really told the truth by a person performing the Microblading procedure?
            </Typography>
            <br />
            <br />
            <ul>
              <li>
                <Typography variant="h5">
                  Tattoo professionals and artists who are tattooing both body art and cosmetic applications wonder how many times can delicate facial tissue tolerate the slicing and cutting and will permanent scars caused by numerous microblading procedures be visible?
                </Typography>
              </li>
              <br />
              <br />
              <li>
                <Typography variant="h5">
                  No women of any age will give up their brows. Numerous microblading procedures will potentially cause permanent brow loss.
                </Typography>
              </li>
            </ul>
              <Typography variant="h5">
                If you were told about potential permanent scars and brow loss would you under go the microblading procedure in the first place!
              </Typography>
          </div>
          <br />
          <br />
          <hr style={{width: "70%"}}/>
          <br />
          <br />
          <div style={{margin: "5%"}}>
            <Typography variant="h5">
              The preferred eyebrow permanent cosmetic alternative is “3D Hair Stroke”.
            </Typography>
            <br />
            <br />
            <Typography variant="h5">
              This procedure delivers thousands of tiny punctures leaving behind a trace amount of pigment with each skin puncture and is similar to a dot matrix image.  These punctures leave the epidermis intact and if delivered correctly, the skin heals completely without scarring and the color will live within the skin for a longer amount of time.
            </Typography>
            <br />
            <br />
            <Typography variant="h5">
              The 3-D hair stroke method “tattoos” the pigment in rather than “slicing” it in like microblading.  The strokes look the same, but will last approximately 2-5 years and sometimes longer.
            </Typography>
            <br />
            <br />
            <Typography variant="h5">
              3-D hair strokes tattooed in the eyebrow area may be maintained for years to come.  The skin heals completely leaving no scar tissue behind thus the tattoo can be refreshed as needed.
            </Typography>
            <br />
            <br />
            <br />
            <br />
            <Typography variant="h5">
              The cost is similar for both procedures.
            </Typography>
            <br />
            <br />
            <Typography variant="h5">
              Some will argue that microblading looks more natural than permanent cosmetic makeup procedures.  However, this is only true of solid tattooing of the brows and even though it is probably the most common method used today, it is the highly skilled permanent cosmetic artists that have developed and been tattooing the 3-D eyebrow hair strokes for the last 25+ years!
            </Typography>
            <br />
            <br />
            <Typography variant="h5">
              The choice is ultimately up to the client.  It is highly recommended to do your homework, and ask questions which procedure is right for you before under going the faddish eyebrow craze procedure known as microblading.
            </Typography>
          </div>
        </div>
      )
    },
  },
  {
    'url': 'women/eyeliner',
    'banner':womanBanner,
    'gender':'woman',
    'category': 'Exquisite Eyeliner',
    'name': 'Permanent Cosmetics',
    'images': eyelinerImages,
    'img':( <img alt="eyeliner" src={eyelinerImages[0].img} style={{width: "100%", height: "auto"}}/>),
    'firstParagraph': () => {
      return (
        <div>
          <Typography variant="h5">
            Pigment is applied at the base of the lashes to give a fuller look. Natural or Glamorous – The choice is yours!
          </Typography>
          <br />
          <br />
          <Typography variant="h5">
            Permanent cosmetics are for the active person, at work or at play!
          </Typography>
          <br />
          <br />
          <Typography variant="h5">
            You can have that natural look 24 hours a day with no preparation time. Permanent cosmetics will enhance your beauty or camouflage imperfections. If you are allergic to cosmetics, wear contact lenses, enjoy athletic activities or have limited dexterity then this is the solution for you!
          </Typography>
          <br />
          <br />
        </div>
      )
    },
    'secondParagraph': () => {
      return (
        <div style={{marginBottom: "50px", paddingTop: "50px"}}>
          <div style={{margin: "5%"}}>
            <Typography variant="h4" style={{color: redColor}}>
              What are permanent cosmetics?
            </Typography>
            <br />
            <br />
            <Typography variant="h5">
              Permanent cosmetics are natural pigments that are implanted into the skin to enhance various facial features, using a tattoo process.
            </Typography>
            <br />
            <br />
            <Typography variant="h4" style={{color: redColor}}>
              What Will I feel?
            </Typography>
            <br />
            <br />
            <Typography variant="h5">
              A topical anesthetic is used to numb the area, though some will feel a light burning sensation.
            </Typography>
            <br />
            <br />
            <Typography variant="h4" style={{color: redColor}}>
              Is It Safe?
            </Typography>
            <br />
            <br />
            <Typography variant="h5">
              Yes, the procedure is provided in a sanitary environment and all instruments are sterilized and disposable.
            </Typography>
            <br />
            <br />
          </div>
        </div>
      )
    },
  },
  {
    'url': 'women/lips',
    'banner':womanBanner,
    'gender':'woman',
    'category': 'Luscious Lips',
    'name': 'Lips',
    'images': lipsImages,
    'img':( <img alt='lips' src={lipsImages[0].img} style={{width: "100%", height: "auto"}}/>),
    'firstParagraph': () => {
      return (
        <div>
          <Typography variant="h5">
            Pigment can be applied to enhance lips with natural shades, giving lip lines more definition, or lips can be retinted and reshaped to appear more full and colorful.
          </Typography>
          <br />
          <br />
          <Typography variant="h5">
            Permanent cosmetics are for the active person, at work or at play!
          </Typography>
          <br />
          <br />
          <Typography variant="h5">
            You can have that natural look 24 hours a day with no preparation time. Permanent cosmetics will enhance your beauty or camouflage imperfections. If you are allergic to cosmetics, wear contact lenses, enjoy athletic activities or have limited dexterity then this is the solution for you!
          </Typography>
          <br />
          <br />
        </div>
      )
    },
    'secondParagraph': () => {
      return (
        <div style={{marginBottom: "50px", paddingTop: "50px"}}>
          <div style={{margin: "5%"}}>
            <Typography variant="h4" style={{color: redColor}}>
              What are permanent cosmetics?
            </Typography>
            <br />
            <br />
            <Typography variant="h5">
              Permanent cosmetics are natural pigments that are implanted into the skin to enhance various facial features, using a tattoo process.
            </Typography>
            <br />
            <br />
            <Typography variant="h4" style={{color: redColor}}>
              What Will I feel?
            </Typography>
            <br />
            <br />
            <Typography variant="h5">
              A topical anesthetic is used to numb the area, though some will feel a light burning sensation.
            </Typography>
            <br />
            <br />
            <Typography variant="h4" style={{color: redColor}}>
              Is It Safe?
            </Typography>
            <br />
            <br />
            <Typography variant="h5">
              Yes, the procedure is provided in a sanitary environment and all instruments are sterilized and disposable.
            </Typography>
            <br />
            <br />
          </div>
        </div>
      )
    },
  },
  {
    'url': 'women/microneedling',
    'banner':womanBanner,
    'img': ( <img alt='microneedling' src={rejuvapen} style={{width: "100%", height: "auto"}}/>),
    'gender':'woman',
    'category': 'Microneedling',
    'name': 'Introduction to Microneedling',
    'images':[],
    'firstParagraph': () => {
      return (
        <div>
          <Typography variant="h4" style={{color: redColor}}>
            What is Microneedling?
          </Typography>
          <br />
          <br />
          <Typography variant="h5">
            Microneedling or Skin Needling is a procedure typically used to improve skin texture and tone, erase fine lines and wrinkles and restore vitality to the skin of the face, neck, decollete and hands.  In addition, it is also used to reduce and smooth acne scarring, soften scar tissue and improve skin discoloration.
          </Typography>
          <br />
          <br />
        </div>
      )
    },
    'secondParagraph': () => {
      return (
        <div style={{marginBottom: "50px", paddingTop: "50px"}}>
          <div style={{margin: "5%"}}>
            <Typography variant="h4" style={{color: redColor}}>
              How Does Microneedling Work?
            </Typography>
            <br />
            <br />
            <Typography variant="h5">
              Microneedling is a minimally invasive process that is performed with a machine similar to a permanent cosmetics device.  The Rejuvapen ™ utilizes a cartridge system to carry tiny micro needles in varying configurations to deliver the treatment in a controlled, safe and sterile manner.  Hundreds of minute punctures are made in the skin via these micro needles.  This controlled injury triggers the body’s healing response.  The skin begins to repair the damage almost instantly, regenerating collagen and elastin.
            </Typography>
            <br />
            <br />
            <Typography variant="h5">
              Since the body does not remember these fine lines, wrinkles and imperfections as part of their original make up, the structural remodeling occurring during the rejuvenation period plumps up the skin minimizing the damage caused from sun exposure and aging. Here are some before and after images of what the Rejuvapen ™ does.
            </Typography>
            <br />
            <br />
          </div>
          <div style={{backgroundColor: "#e0e0e0"}}>
            <div style={{margin: "5%", paddingTop: "50px"}}>
              <Typography variant="h4" style={{color: redColor}}>
                Why Skin Needling?
              </Typography>
              <br />
              <br />
              <Typography variant="h5">
                The advantages of skin needling over more invasive procedures are many.
              <br />
              <br />
              <Typography variant="h5">
                <strong>Cost:</strong>  Skin Needling procedures usually run between $125 and $250 for full face treatments versus much more expensive laser procedures.
              </Typography>
              <br />
              <br />
              <Typography variant="h5">
                <strong>Risk:</strong>  This minimally invasive process works faster and requires less down time for recovery.  Most sessions needing only 24 hours to return to normal.
              </Typography>
              <br />
              <br />
              <Typography variant="h5">
                <strong>All Natural:</strong> Micro Needling stimulates the body’s own ability to heal without injection, incisions or chemical assistance.  Although some skin may have additional benefit from the use of minerals, vitamins or oils that  promote healthy skin. 
              </Typography>
              <br />
              <br />
             </Typography>
            </div>
          </div>
          <div style={{margin: "5%", paddingTop: "50px"}}>
              <Typography variant="h4" style={{color: redColor}}>
                What Are the Benefits of Skin Needling?
              </Typography>
              <br />
              <br />
              <Typography variant="h5">
                The Rejuvapen™ with its innovative cartridge system utilizes the safest delivery of its exceptional results!
              </Typography>
              <br />
              <br />
              <Typography variant="h5">
                Skin will appear brighter and more youthful, pores will be less noticeable and lines and wrinkles may diminish by 40-80%!
              </Typography>
              <br />
              <br />
              <Typography variant="h5">
                This 100% natural option to anti aging produces immediate results and encourages continued collagen regeneration.  Treatments may be combined with other facial services or repeated over time to further enhance results.
              </Typography>
          </div>
        </div>
      )
    },
  },
  {
    'url':'men/alopecia',
    'banner':require('../assets/mensalopeciahero.jpeg'),
    'gender': 'man',
    'category': 'Men\'s Alopecia',
    'name': 'Scalp Micropigmentation',
    'images': menAlopeciaImages,
    'img':( <img alt="alopecia" src={menAlopeciaImages[0].img} style={{width: "100%", height: "auto"}}/>),
    'firstParagraph': () => {
      return(
        <div>
          <Typography variant="h4">
            Hair Loss Treatment for Alopecia
          </Typography>
          <Typography variant="h5">
            <br />
            Though Alopecia effects 1 in every 1,000 people in the U.S.*, finding the best solutions for hair loss can be so challenging that it magnifies the psychological effects of the disease.
            <br />
            <br />
            Though there are a number of medical treatments for Alopecia, there are often limited long-term effects for many of them. Most of these treatments either take months to show results or become ineffective after initial success. In the meantime, the Alopecia patient often suffers from depression, social phobia, or anxiety.
          </Typography>
        </div>
    )
    },
    'secondParagraph':() => {
      return (
        <div>
          <Typography variant="h4" style={{textAlign: "center", margin: "5%", marginBottom:"30px", color: redColor}}>
            SMP offers an advanced, cutting edge solution for people who struggle with Alopecia!
          </Typography>
          <hr style={{width: "60%", marginBottom: "40px", marginTop: "40px"}}/>
          <Typography variant="h5" style={{textAlign: "center", margin: "5%", marginBottom:"30px"}}>
            For men and women who suffer hair loss from Alopecia, Traction Alopecia, chemotherapy, or radiation, SMP offers a cutting edge, natural looking alternative. For men, SMP can produce a natural buzz cut or edged up look. For women, SMP can simulate hair follicles beneath thinning hair, resulting in fuller looking hair with a far less patchy appearance. SMP can also be used as to bridge the time period of regrowth for chemotherapy or radiation patients.
          </Typography>
        </div>
      )
    },
  },
  {
    'url': 'men/hair-loss-treatment',
    'banner':manBanner,
    'gender':'man',
    'images': menHairLossImages,
    'img':(
          <iframe style={{height: "50vh", width: "100%"}} title="mens hair loss video" src="https://www.youtube.com/embed/kUd2FFMTcds" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    ),
    'category': 'Men\'s Hair Loss Treatment',
    'name': 'Scalp Micropigmentation',
    'firstParagraph': () => {
      return (
        <div>
          <Typography variant="h4">
            Introduction to Scalp Micropigmentation (SMP)
          </Typography>
          <br />
          <Typography variant="h5">
            Scalp Micropigmentation (SMP) is a sophisticated medical tattoo process that creates natural looking simulation of micro hairs. This incredibly detailed scalp application is administered to the head typically in 2-3 sessions performed over the course of a few weeks creating what many are now calling the modern solution for hair loss.
          <br />
          <br />
For sufferers of regular hair loss or alopecia, SMP offers an effective cosmetic hair loss solution. Competent application of the SMP technique results in the appearance of a cropped hairstyle, regardless of your hair loss situation. Even clients who are completely bald can have an undetectable, natural looking hairline again.
          </Typography>
        </div>
      )
    },
    'secondParagraph': () => {
      return (
        <div style={{textAlign: "center", paddingTop: "50px"}}>
        </div>
      )
    },
  },
  {
    'url': 'men/transplant-scars',
    'banner':require('../assets/transplanthero.jpeg'),
    'gender':'man',
    'category': 'Transplant Scars',
    'name': 'Scalp Micropigmentation',
    'images': menTransplantImages,
    'img':( <img alt="transplant scars" src={menTransplantImages[0].img} style={{width: "100%", height: "auto"}}/>),
    'firstParagraph': () => {
      return (
        <div>
          <Typography variant="h4">
            What are Donor or Harvest Scars?
          </Typography>
          <br />
          <Typography variant="h5">
            When a man undergoes a hair transplant, the site where existing follicles are removed and dissected into individual units to be transplanted into a balding/thinning area is called the “donor site” or “harvest site.” Unfortunately, because hair transplantation is an invasive surgical procedure, it does leave a noticeable scar.
          <br />
          <br />
            The scars from a hair transplant procedure can range in width and length. Some scars are significant and can span from the back of one ear to the back of the other. Other follicle harvesting techniques such as FUE (Follicular Unit Extraction), which uses a punching technique to remove the follicles, can leave scars as bad or worse than strip scars.
          </Typography>
        </div>
          )
      },
    'secondParagraph': () => {
      return (
        <div style={{backgroundColor:'#e0e0e0', paddingTop: "50px", padingBottom: "50px"}}>
          <div style={{margin: "5%", padingBottom: "50px"}}>
            <Typography variant="display2" style={{textAlign: "center", marginBottom: "50px"}}>
              Get Your Confidence Back!
            </Typography>
            <Paper style={{padding: "50px"}}>
              <Typography variant="h5">
                How do you hide a hair transplant scar?
              </Typography>
              <br />
              <br />
              <Typography variant="h5">
                Many men are unprepared for the resulting scar from a hair transplantation surgery. The very procedure they chose to boost their confidence often leaves them dealing with a very visible scar. Many men have stated that they may have been shown pictures of successful hair transplants that do not show the scar, and they would not have had the surgery had they known.
              </Typography>
              <br />
              <br />
              <Typography variant="h5">
                Previously, the only strategies for hiding donor scars included growing a man’s hair longer to hide the scar. With the perfection of the scalp micropigmentation process, harvest scars can be camouflaged to be nearly undetectable. Specialized machines and proprietary micro needles paired with pigments designed just for work on the scalp, enable skilled technicians to replicate missing follicles and blend the color of the scar.
              </Typography>
              <br />
              <br />
              <Typography variant="h5">
                Pam Neighbors is a Master SMP Technician with over 25 years of experience working with plastic surgeons. She has perfected a combination of “skin needling” (if the scar must be softened), and a scalp micropigmentation technique that blends the scar area into the natural follicles of the scalp. The result significantly diminishes the appearance of the donor scar, thus restoring confidence.
              </Typography>
            </Paper>
          </div>
        </div>
      )
    },
  },
];

export default services;
