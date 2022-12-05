import {ClientAnalytics} from '@shopify/hydrogen';

let init = false;
export default function AnalyticsListener() {
 useEffect(() => {
   // Set up common page-specific data
   ClientAnalytics.pushToPageAnalyticsData({
     userLocale: navigator.language,
   });

   if (!init) {
     // One-time initialization
     init = true;
     ClientAnalytics.subscribe(
       ClientAnalytics.eventNames.PAGE_VIEW,
       (payload) => {
         console.log(payload);
       }
     );
   }
 });

 return null;
}
