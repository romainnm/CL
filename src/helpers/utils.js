export const navScroll = (element) => {
     const event = window.addEventListener("scroll", () => {
       const headerHeight =
         element.current.getBoundingClientRect().height;
       if (window.scrollY < headerHeight + 80) {
         element.current.style.top = "0";
       } else {
         element.current.style.top = "-80px";
       }
     });
     return () => window.removeEventListener("scroll", event);
}

