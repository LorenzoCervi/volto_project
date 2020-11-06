
// IMPORTO TUTTI GLI ELEMENTI REACT CHE MI SERVONO
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';

//IMPORTO I METODI CHE MI SERVONO PER USARE formatMessage
import{
 defineMessages,
 injectIntl,
 FormattedMessage,
 } from 'react-intl';
 
 // CREO UN OGGETTO MESSSAGGIO CHE DEFINICO CON IL METODO defineMessages
 const messages=defineMessages({
 	searchTag:{
 	id: 'Search',
 	defaultMessage:'Search',
 	},
 });

/**
 * Tags component class.
 * @function Tags
 * @param {array} tags Array of tags.
 * @returns {string} Markup of the component.
 */

const Tags = ({ tags, intl }) =>
// SE tags ESISTE ED È MAGGIORE DI 0 LA SUA LUGNHEZZA
// ALLORA CREA UN CONTAINER
  tags && tags.length > 0 ? (
    <Container>
    {/* Tags: */}
    <FormattedMessage id="Tags" defaultMessage="Tags" />
    {/* Tags è definito in questo modo: ogni tag viene mappato in modo che sia un componente 
    Link che porta ad una stessa stringa che è uguale a tag, ovvero quando si clicca un tag l'azione corrispondente
    è portare a quegli oggetti che hanno come Subject lo stesso tag*/}
            {/* quando passo con il mouse su un tag comparirà la traduzione di Search*/}
      
      {tags.map(tag => (
        <Link className="ui label" 
        to={`/search?Subject=${tag}`} 
        key={tag}
        title={intl.formatMessage(messages.searchTag, {tag})}
        >
          {tag}
        </Link>
      ))}
    </Container>
  ) : (
  //ALTRIMENTI NON FA NIENTE SE NON UNO SPAN 
    <span />
  );

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
// DEFINISCO TUTTI I TIPI DELLE PROPRIETÀ DEL COMPONENTE
Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
// DEFINISCO IL VALORE DI DEFAULT DI UNA PROPRIETÀ ATTRAVERSO LA PROPRIETÀ
// SPECIALE defaultProps
Tags.defaultProps = {
  tags: null,
};

//  ESPORTO LA COMPONENTE COSÌ CHE POSSA ESSERE IMPORTATA IN ALTI FILE
//INIETTANDO INTL ALL'INTERNO DEL COMPONENTE PER FAR IN MODO DI USARE formatMessages IN TITLE 
export default injectIntl(Tags);
