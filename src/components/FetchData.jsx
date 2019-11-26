import React from 'react';
import UserData from './UserData';
import LessonData from './LessonData';
import KanjiData from './KanjiData';

class FetchData extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         isLoading: false,
      };
   }

   componentDidMount() {
      this.setState({
         isLoading: true,
      });
      fetch(
         'https://www.wanikani.com/api/user/2aed881d20b5022a298bee2a5f95a90f/study-queue',
      )
         .then(response => response.json())
         .then(data => {
            this.setState({
               username: data.user_information.username,
               level: data.user_information.level,
               lessons: data.requested_information.lessons_available,
               reviews: data.requested_information.reviews_available,
               isLoading: false,
            });
         });
      this.fetchKanjiData();
   }

   handleClick = () => {
      this.fetchKanjiData();
   };

   fetchKanjiData = () => {
      fetch(
         'https://www.wanikani.com/api/user/2aed881d20b5022a298bee2a5f95a90f/kanji',
      )
         .then(response => response.json())
         .then(data => {
            console.log(data);
            let random = this.findRandomKanji(data.requested_information);
            this.setState({
               character: random.character,
               meaning: random.meaning,
               kunyomi: random.kunyomi,
               onyomi: random.onyomi,
            });
         });
   };

   findRandomKanji = data => {
      return data[Math.floor(Math.random() * data.length)];
   };

   render() {
      const isLoading = this.state.isLoading;
      const userData = {
         username: this.state.username,
         level: this.state.level,
      };
      const lessonData = {
         lessons: this.state.lessons,
         reviews: this.state.reviews,
      };
      const kanjiData = {
         character: this.state.character,
         meaning: this.state.meaning,
         kunyomi: this.state.kunyomi,
         onyomi: this.state.onyomi,
      };
      if (isLoading) {
         return <p>Loading...</p>;
      }
      return (
         <div>
            <UserData {...userData} />
            <LessonData {...lessonData} />
            <KanjiData {...kanjiData} />
            <button onClick={this.handleClick}>Random Kanji</button>
         </div>
      );
   }
}

export default FetchData;
