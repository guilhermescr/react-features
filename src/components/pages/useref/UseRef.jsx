import Header from '../../Header';
import Main from '../../Main';
import Footer from '../../Footer';
import BackToHomeButton from '../../BackToHomeButton';
import styles from './UseRef.module.css';
import { useRef, useState } from 'react';
import Topic from './Topic';
import topics from './topics.json';

export default function UseRef() {
  const topicTags = [
    'Gamer',
    'Education',
    'Technology',
    'Medicine',
    'Productivity',
    'Sustainability'
  ];
  const [filteredTopics, setFilteredTopics] = useState([]);
  const [searchOptions, setSearchOptions] = useState({
    isSearching: false,
    hasSearchTagInTopicTags: false
  });
  const topicsContainer = useRef(null);
  const searchInput = useRef(null);

  function handleSearch() {
    /* searchTag makes sure the input will follow these rules:
    - Starts with capital letter
    - Rest of the string is in lower case
    */
    const searchTag =
      searchInput.current.value.charAt(0).toUpperCase() +
      searchInput.current.value.slice(1).toLowerCase();

    if (topicTags.includes(searchTag)) {
      setFilteredTopics([
        ...filteredTopics,
        ...topics.filter(topicData => topicData.topicTag === searchTag)
      ]);
    } else {
      setFilteredTopics([]);
    }

    setSearchOptions({
      isSearching: searchTag.length !== 0,
      hasSearchTagInTopicTags: topicTags.includes(searchTag)
    });
  }

  return (
    <div className="bg-gray-400">
      <Header page="useRef" />

      <Main customCSS="flex flex-col gap-5 items-center justify-center pb-20 w-full">
        <h1 className="font-bold text-3xl text-white">Learning Center</h1>

        <section className="search-box flex flex-col gap-4 bg-white p-4 rounded-md max-w-4xl w-full">
          <h2 className="font-bold text-xl">Search a topic tag here!</h2>

          <p>
            <strong>Example:</strong> gamer
          </p>

          <div className="flex gap-2 items-center w-full">
            <label htmlFor="search">Search:</label>
            <input
              className="border-2 border-gray-500 outline-none px-2 w-full focus:border-black focus:border-2"
              type="search"
              name="search"
              id="search"
              autoComplete="off"
              ref={searchInput}
              onInput={handleSearch}
            />
          </div>
        </section>

        <section className={`topics ${styles.topics}`} ref={topicsContainer}>
          {!searchOptions.isSearching &&
            topics.map(
              (
                { imgSrc, imgAltTxt, heading, description, topicTag },
                index
              ) => (
                <Topic
                  key={index}
                  imgSrc={imgSrc}
                  imgAltTxt={imgAltTxt}
                  heading={heading}
                  description={description}
                  topicTag={topicTag}
                />
              )
            )}

          {searchOptions.isSearching &&
            searchOptions.hasSearchTagInTopicTags &&
            filteredTopics.map(
              (
                { imgSrc, imgAltTxt, heading, description, topicTag },
                index
              ) => (
                <Topic
                  key={index}
                  imgSrc={imgSrc}
                  imgAltTxt={imgAltTxt}
                  heading={heading}
                  description={description}
                  topicTag={topicTag}
                />
              )
            )}
        </section>

        <BackToHomeButton />
      </Main>

      <Footer />
    </div>
  );
}
