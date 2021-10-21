import React from 'react';

import {
   EmailShareButton,
   FacebookShareButton,
   LinkedinShareButton,
   TwitterShareButton,
   WhatsappShareButton,
} from 'react-share';
import {
   EmailIcon,
   FacebookIcon,
   LinkedinIcon,
   TwitterIcon,
   WhatsappIcon,
} from 'react-share';

function ButtonShare(props) {
   const sharedUrl = 'https://kleiderly.com/';
   return (
      <div>
         <TwitterShareButton url={sharedUrl}>
            <TwitterIcon size={32} round={true} style={{ margin: '5px' }} />
         </TwitterShareButton>

         <FacebookShareButton url={sharedUrl}>
            <FacebookIcon size={32} round={true} style={{ margin: '5px' }} />
         </FacebookShareButton>

         <WhatsappShareButton url={sharedUrl}>
            <WhatsappIcon size={32} round={true} style={{ margin: '5px' }} />
         </WhatsappShareButton>

         <LinkedinShareButton url={sharedUrl}>
            <LinkedinIcon size={32} round={true} style={{ margin: '5px' }} />
         </LinkedinShareButton>

         <EmailShareButton url={sharedUrl}>
            <EmailIcon size={32} round={true} style={{ margin: '5px' }} />
         </EmailShareButton>
      </div>
   );
}

export default ButtonShare;
