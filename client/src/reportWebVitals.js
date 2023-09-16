const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    //import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
     import ('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB}) => {
      //getCLS(onPerfEntry);
      getCLS(onPerfEntry)
      //getFID(onPerfEntry);
      getFID(onPerfEntry)
      //getFCP(onPerfEntry);
      getFCP(onPerfEntry)
      //getLCP(onPerfEntry);
      getLCP(onPerfEntry)
      //getTTFB(onPerfEntry);
      getTTFB(onPerfEntry)
    });
  }
};

export default reportWebVitals;
