<!-- adds effects based on scroll position -->

const [offsetY, setOffsetY] = useState(0); //tracks scrolling

// get page location in Y axis && parallax effect ----- HandleScroll
const handleScroll = () => setOffsetY(window.pageYOffset);
useEffect(() => {
window.addEventListener("scroll", handleScroll);
return () => window.removeEventListener("scroll", handleScroll);
}, []);

<!-- place this inline in the actual element tag -->
      style={{
             transform: `translateY(${offsetY * 0.075}px)`,
             filter: `blur(${offsetY < 750 ? offsetY * 0.15 : offsetY * 0}px)`,
             opacity: `${offsetY * 18.9}`,
           }}
