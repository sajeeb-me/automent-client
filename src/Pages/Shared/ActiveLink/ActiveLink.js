import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function ActiveLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{
                    color: match ? "#06b6d4" : "",
                    borderBottom: match ? "2px solid #06b6d4" : ""
                }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}

export default ActiveLink;