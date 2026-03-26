import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
    const { defaultTab, tabStyle } = attributes;

    const blockProps = useBlockProps.save( {
        'data-default-tab': defaultTab,
        'data-tab-style':   tabStyle,
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