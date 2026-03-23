/**
 * Initialise tous les accordéons présents dans la page.
 * Appelé au DOMContentLoaded pour s'assurer que le HTML est prêt.
 */
function initAccordions() {
    const accordions = document.querySelectorAll( '.wp-block-gab-accordion' );

    accordions.forEach( ( accordion ) => {
        const allowMultiple = accordion.dataset.allowMultiple === 'true';
        const items = accordion.querySelectorAll( '.gab-accordion-item' );

        items.forEach( ( item ) => {
            const header = item.querySelector( '.gab-accordion-item__header' );
            const body   = item.querySelector( '.gab-accordion-item__body' );

            if ( ! header || ! body ) return;

            header.addEventListener( 'click', () => {
                const isOpen = item.dataset.open === 'true';

                // Si allowMultiple est false, on ferme tous les autres items
                if ( ! allowMultiple ) {
                    items.forEach( ( otherItem ) => {
                        if ( otherItem !== item ) {
                            closeItem( otherItem );
                        }
                    } );
                }

                // On bascule l'état de l'item cliqué
                isOpen ? closeItem( item ) : openItem( item );
            } );
        } );
    } );
}

/**
 * Ouvre un item d'accordéon.
 *
 * @param {HTMLElement} item
 */
function openItem( item ) {
    const body   = item.querySelector( '.gab-accordion-item__body' );
    const header = item.querySelector( '.gab-accordion-item__header' );

    item.dataset.open = 'true';
    body.removeAttribute( 'hidden' );
    header.setAttribute( 'aria-expanded', 'true' );
}

/**
 * Ferme un item d'accordéon.
 *
 * @param {HTMLElement} item
 */
function closeItem( item ) {
    const body   = item.querySelector( '.gab-accordion-item__body' );
    const header = item.querySelector( '.gab-accordion-item__header' );

    item.dataset.open = 'false';
    body.setAttribute( 'hidden', '' );
    header.setAttribute( 'aria-expanded', 'false' );
}

document.addEventListener( 'DOMContentLoaded', initAccordions );