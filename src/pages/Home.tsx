/* eslint-disable */
import React, { useEffect, useState, useCallback, useMemo } from "react";
import BannerSlider from "../components/Banner/BannerSlider";
import SongSlider from "../components/Banner/SongSlider";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "../assets/css/carousel.css";
import { TopCharts } from "../data/topCharts";
import { Podcasts } from "../data/podcasts";
import { IndieSongs } from "../data/indieSongs";
import { InternationalHits } from "../data/internationalHits";
import { HindiHits } from "../data/hindiHits";
import { formatApiResponse,  } from "./helper";

const SONGS_METADATA_FETCH_URL = "https://f5f7ab7e-8998-40fd-bc09-69adc7b04267.mock.pstmn.io/getSongsData";
// Home component
const Home = <T extends object>(props: T): JSX.Element => {
  // Default song sliders data
  const defaultSongSliders = useMemo(
    () => [
      { songData: HindiHits, title: "Hindi Top 50", slideToShow: 7 },
      { songData: InternationalHits, title: "International Top Hits", slideToShow: 7 },
      { songData: TopCharts, title: "Top Charts" },
      { songData: Podcasts, title: "Top Podcasts" },
      { songData: IndieSongs, title: "Indie Music" },
    ],     
  []
  );

  // State for song sliders
  const [songSliders, setSongSliders] = useState(defaultSongSliders);
  // State for loading status
  const [isLoading, setIsLoading] = useState(false);

  // Fetch song sliders on component mount
  const fetchSongSliders = useCallback(async () => {
    setIsLoading(true);
    try {
      /**
       * Created A Mock server here using postman to fetch data from an API
       * https://f5f7ab7e-8998-40fd-bc09-69adc7b04267.mock.pstmn.io/getSongsData
       * In case API fails to respond, defaultSongSliders will be used
       */
      const response = await fetch(SONGS_METADATA_FETCH_URL);
      const result = await response.json();
      if (result && Array.isArray(result.data) && result.data.length) {
        const formattedResponse = formatApiResponse(result.data, defaultSongSliders);
        setSongSliders(formattedResponse);
      }
    } catch (error) {
      setSongSliders(defaultSongSliders);
    }
    setIsLoading(false);
  }, [defaultSongSliders]);

  useEffect(() => {
    fetchSongSliders();
  }, [fetchSongSliders]);

  // Render the Home component
  return (
    <React.Fragment>
      <main>
        <Header />
        <BannerSlider />
        {/* Map over songSliders to render SongSlider components */}
        {!isLoading &&
          songSliders.map((slider, index) => (
            <SongSlider
              key={index}
              songData={slider.songData}
              title={slider.title}
              slideToShow={slider.slideToShow}
            />
          ))}
        <Footer />
      </main>
    </React.Fragment>
  );
};

export default Home;
