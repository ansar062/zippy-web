 //we can also workarround to use this vartions for our about us page  to make code more leaner
 //you will define this in a seperate file and import it in your component
 //use it in varinats prop of motion.div and then name the variants as you want as initial animate and exit
 //initial properties
 const initialScale=.1;
 const initialRotate=180;
 const stiffness=10;
 const duration=7;
 const finalScale=.3;
const animationsVariants = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
        duration: 0.5,
        ease: 'easeOut',
        },
    },
    exit: {
        opacity: 0,
        y: 50,
        transition: {
        duration: 0.5,
        ease: 'easeOut',
        },
    },
    };
