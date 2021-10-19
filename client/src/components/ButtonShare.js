import React from 'react';
import './css/ButtonShare.css';

import {
   EmailShareButton,
   FacebookShareButton,
   HatenaShareButton,
   InstapaperShareButton,
   LineShareButton,
   LinkedinShareButton,
   LivejournalShareButton,
   MailruShareButton,
   OKShareButton,
   PinterestShareButton,
   PocketShareButton,
   RedditShareButton,
   TelegramShareButton,
   TumblrShareButton,
   TwitterShareButton,
   ViberShareButton,
   VKShareButton,
   WhatsappShareButton,
   WorkplaceShareButton,
} from 'react-share';
import {
   EmailIcon,
   FacebookIcon,
   FacebookMessengerIcon,
   HatenaIcon,
   InstapaperIcon,
   LineIcon,
   LinkedinIcon,
   LivejournalIcon,
   MailruIcon,
   OKIcon,
   PinterestIcon,
   PocketIcon,
   RedditIcon,
   TelegramIcon,
   TumblrIcon,
   TwitterIcon,
   ViberIcon,
   VKIcon,
   WeiboIcon,
   WhatsappIcon,
   WorkplaceIcon,
} from 'react-share';

function ButtonShare(props) {
   const sharedUrl = 'https://kleiderly.com/';
   return (
      <div className="buttonshare-wrapper">
         <TwitterShareButton url={sharedUrl}>
            <TwitterIcon size={32} round={true} className="buttonshare-button" />
         </TwitterShareButton>

         <FacebookShareButton url={sharedUrl}>
            <FacebookIcon size={32} round={true} className="buttonshare-button" />
         </FacebookShareButton>

         <WhatsappShareButton url={sharedUrl}>
            <WhatsappIcon size={32} round={true} className="buttonshare-button" />
         </WhatsappShareButton>

         <LinkedinShareButton url={sharedUrl}>
            <LinkedinIcon size={32} round={true} className="buttonshare-button" />
         </LinkedinShareButton>

         <EmailShareButton url={sharedUrl}>
            <EmailIcon size={32} round={true} className="buttonshare-button" />
         </EmailShareButton>
      </div>
   );
}

export default ButtonShare;
