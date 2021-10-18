import React from 'react';

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
