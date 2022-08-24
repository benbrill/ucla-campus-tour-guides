import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import React from 'react';

// ...

const MyComponent = () => {
    const breakpoints = useBreakpoint();

    return (
        <div>
            {/* Anything */}

            {/* <MobileOnlyComponent /> will only be displayed if max-width <= 320px  */}
            {breakpoints.xs ? <div>hello</div> : null}
        </div>
    );
};

export default MyComponent;