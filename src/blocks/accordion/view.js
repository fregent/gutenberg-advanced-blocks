// Table des icônes — doit correspondre exactement à celle de edit.js
const ICONS = {
    plus:   { open: '+',  close: '−' },
    arrow:  { open: '›',  close: '‹' },
    caret:  { open: '▾',  close: '▴' },
    circle: { open: '●',  close: '○' },
};

function initAccordions() {
    const accordions = document.querySelectorAll( '.wp-block-gab-accordion' );

    accordions.forEach( ( accordion ) => {
        const allowMultiple = accordion.dataset.allowMultiple === 'true';
        // Récupère l'icône choisie — fallback sur 'plus' si absent
        const iconKey       = accordion.dataset.icon ?? 'plus';
        const icon          = ICONS[ iconKey ] ?? ICONS.plus;
        const items         = accordion.querySelectorAll( '.gab-accordion-item' );

        items.forEach( ( item ) => {
            const header   = item.querySelector( '.gab-accordion-item__header' );
            const body     = item.querySelector( '.gab-accordion-item__body' );
            const iconSpan = item.querySelector( '.gab-accordion-item__icon' );

            if ( ! header || ! body ) return;

            // Initialise l'icône selon l'état du panneau
            if ( iconSpan ) {
                iconSpan.textContent = item.dataset.open === 'true'
                    ? icon.close
                    : icon.open;
            }

            header.addEventListener( 'click', () => {
                const isOpen = item.dataset.open === 'true';

                if ( ! allowMultiple ) {
                    items.forEach( ( otherItem ) => {
                        if ( otherItem !== item ) {
                            closeItem( otherItem, icon );
                        }
                    } );
                }

                isOpen ? closeItem( item, icon ) : openItem( item, icon );
            } );
        } );
    } );
}

function openItem( item, icon ) {
    const body     = item.querySelector( '.gab-accordion-item__body' );
    const header   = item.querySelector( '.gab-accordion-item__header' );
    const iconSpan = item.querySelector( '.gab-accordion-item__icon' );

    item.dataset.open = 'true';
    body.removeAttribute( 'hidden' );
    header.setAttribute( 'aria-expanded', 'true' );

    // Met à jour l'icône vers l'état fermé (action disponible = fermer)
    if ( iconSpan ) iconSpan.textContent = icon.close;
}

function closeItem( item, icon ) {
    const body     = item.querySelector( '.gab-accordion-item__body' );
    const header   = item.querySelector( '.gab-accordion-item__header' );
    const iconSpan = item.querySelector( '.gab-accordion-item__icon' );

    item.dataset.open = 'false';
    body.setAttribute( 'hidden', '' );
    header.setAttribute( 'aria-expanded', 'false' );

    // Met à jour l'icône vers l'état ouvert (action disponible = ouvrir)
    if ( iconSpan ) iconSpan.textContent = icon.open;
}

document.addEventListener( 'DOMContentLoaded', initAccordions );