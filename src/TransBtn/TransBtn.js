import React, {Component} from 'react'
import style from './TransBtn.module.css'
import i18n from 'i18next';
import { withTranslation } from 'react-i18next'

class TransBtn extends Component {
  state = {
    selectedLanguage: 'en',
  };

  changeLanguage = (lng) => {
      i18n.changeLanguage(lng)
      .then(() => {
        this.setState({ selectedLanguage: lng });
      });
    };

  render() {
    const { selectedLanguage } = this.state;
   
    return (
      <div className = {style.box}>
        <button 
          style={selectedLanguage === 'en' ? {backgroundColor: 'green'} : {backgroundColor: 'white'}} 
          onClick = {() => this.changeLanguage('en')}>
          en
        </button>
        <button 
          style={selectedLanguage === 'ru' ? {backgroundColor: 'green'} : {backgroundColor: 'white'}} 
          onClick = {() => this.changeLanguage('ru')}>
          ru
        </button>
      </div>
    );
  }
}

export default withTranslation('translations')(TransBtn);
