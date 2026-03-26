import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
    const { defaultTab, tabStyle, textColor, backgroundColor, fontSize, animation } = attributes;

    const blockProps = useBlockProps.save( {
        'data-default-tab': defaultTab,
        'data-tab-style':   tabStyle,
        'data-animation':   animation,
        style: {
            color:           textColor       || undefined,
            backgroundColor: backgroundColor || undefined,
            fontSize:        `${ fontSize }px`,
        },
    } );

    return (
        <div { ...blockProps }>
            <div className="gab-tabs__nav" role="tablist" />
            <div className="gab-tabs__panels">
                <InnerBlocks.Content />
            </div>
        </div>
    );
}