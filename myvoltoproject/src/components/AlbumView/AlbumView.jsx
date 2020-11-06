import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Image, Card } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';
import { Helmet } from '@plone/volto/helpers'


const AlbumView= ({content}) => (
	<Container className="view-wrapper">
	<Helmet title={content.title} />
	<article id="content">
		<header>
		<h1 className="documentFirstHeading">{content.title}</h1>
		{content.description && (
		<p className="documentDescription">{content.description}</p>
		)}
		</header>
		<section id="content-core">
			<Card.Group>
			{content.items.map(item=> (
			<Card key={item.url}>
			{item.image && (
				<Image 
					alt={item.image_caption ? item.image_caption: item.title}
					src={item.image.scales.thumb.download}
					/>
					)}
			<Card.Content>
				<Card.Header>
					<Link to={item.url} title={item['@type']}>
					 {item.title}
					</Link>
				</Card.Header>
			</Card.Content>
			</Card>
			))}
		</Card.Group>
		</section>
	</article>
	</Container>
	);
	
	/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
AlbumView.propTypes = {
  /**
   * Content of the object
   */
  content: PropTypes.shape({
    /**
     * Title of the object
     */
    title: PropTypes.string,
    /**
     * Description of the object
     */
    description: PropTypes.string,
    /**
     * Child items of the object
     */
    items: PropTypes.arrayOf(
      PropTypes.shape({
        /**
         * Title of the item
         */
        title: PropTypes.string,
        /**
         * Description of the item
         */
        description: PropTypes.string,
        /**
         * Url of the item
         */
        url: PropTypes.string,
        /**
         * Image of the item
         */
        image: PropTypes.object,
        /**
         * Image caption of the item
         */
        image_caption: PropTypes.string,
        /**
         * Type of the item
         */
        '@type': PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default AlbumView;

