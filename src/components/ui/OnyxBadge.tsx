import React from 'react';

const OnyxBadge: React.FC = () => {
    return (
        <a
            href="https://www.onyxandcode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-1 text-center opacity-60 hover:opacity-100 transition-opacity duration-300"
        >
            <div className="text-xl font-bold tracking-tight text-white">
                ONYX <span className="text-gold">&</span> CODE
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-silver font-medium group-hover:text-white transition-colors">
                Designed and Built by www.onyxandcode.com
            </div>
        </a>
    );
};

export default OnyxBadge;
