import React from 'react';
import './css/ButtonShare.css';

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
      <div className="buttonshare-wrapper">
            <TwitterShareButton url={sharedUrl}>
               <TwitterIcon size={40} round={true} className="buttonshare-detail" />
            </TwitterShareButton>

            <FacebookShareButton url={sharedUrl}>
               <FacebookIcon size={40} round={true} className="buttonshare-detail" />
            </FacebookShareButton>

            <WhatsappShareButton url={sharedUrl}>
               <WhatsappIcon size={40} round={true} className="buttonshare-detail" />
            </WhatsappShareButton>

            <LinkedinShareButton url={sharedUrl}>
               <LinkedinIcon size={40} round={true} className="buttonshare-detail" />
            </LinkedinShareButton>

            <EmailShareButton url={sharedUrl}>
               <EmailIcon size={40} round={true} className="buttonshare-detail" />
            </EmailShareButton>
      </div>
   );
}

export default ButtonShare;
