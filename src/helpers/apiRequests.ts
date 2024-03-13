import axios from 'axios';
import React from 'react';
import { SlideProps } from '../types/mainSliderSlide';
import { partnersType } from '../types/partnersType';
import { eventType } from '../types/eventProps';

// Links
import {
  getDate,
  sliderDataUrl,
  partners,
  postsMain,
  postsAll,
  postsAside,
  post,
  videos,
  structure,
  contacts,
  about,
  players,
  events,
  contact_us,
} from '../links';

// Types
import { ContactData, Contact } from '../types/contact';
import { Video } from '../types/video';
import { PlayersData, playerType } from '../types/players';
import { About } from '../types/about';
import { structureType } from '../types/structure';
import { tournamentType } from '../types/events';
import { dateEventType } from '../components/global/CalendarCell';

export const getMainSliderData = (setState: React.Dispatch<SlideProps[]>): void => {
  axios
    .get(sliderDataUrl)
    .then((res) => {
      setState(res.data.data);
    })
    .catch(() => {});
};

export const getPartnerSliderData = (setState: React.Dispatch<partnersType[]>): void => {
  axios
    .get(partners)
    .then((res) => {
      setState(res.data.data);
    })
    .catch(() => {});
};

export const getMainPosts = (setState: eventType[1]): void => {
  axios
    .get(postsMain)
    .then((res) => {
      setState({ ...res.data, loaded: true });
    })
    .catch();
};

export const getAllPosts = (setState: eventType[1]): void => {
  axios
    .get(postsAll)
    .then((res) => {
      setState({ ...res.data, loaded: true });
    })
    .catch();
};

export const getAsidePosts = (setState: eventType[1]): void => {
  axios
    .get(postsAside)
    .then((res) => {
      setState({ ...res.data, loaded: true });
    })
    .catch();
};

export const getEvent = (
  id: string | undefined,
  setState: eventType[1],
  setLoader: React.Dispatch<boolean>,
): void => {
  axios
    .get(`${post}/${id}?locale=ru`)
    .then((res) => {
      setState(res.data.data);
      setTimeout(() => {
        setLoader(false);
      }, 1000);
    })
    .catch(() => {
      setTimeout(() => {
        setLoader(false);
      }, 1000);
    });
};

export const getVideos = (
  setVideoData: React.Dispatch<Video[]>,
  setVideo: playerType[1],
  setActiveVideo: React.Dispatch<number>,
) => {
  axios
    .get(videos)
    .then((res) => {
      setVideoData(res.data.data);
      setVideo(res.data.data[0].video);
      setActiveVideo(res.data.data[0].id);
    })
    .catch();
};

export const getStructure = (setState: React.Dispatch<structureType[]>) => {
  axios
    .get(structure)
    .then((res) => {
      setState(res.data.data);
    })
    .catch();
};

export const getContact = (setState: React.Dispatch<Contact[]>) => {
  axios
    .get(contacts)
    .then((res) => {
      setState(res.data.data);
    })
    .catch();
};

export const getAbout = (setState: React.Dispatch<About>) => {
  axios
    .get(about)
    .then((res) => {
      setState(res.data.data[0]);
    })
    .catch();
};

export const getTeam = (setState: React.Dispatch<PlayersData[]>) => {
  axios
    .get(players)
    .then((res) => {
      setState(res.data.data);
    })
    .catch();
};

export const getEvents = (setState: React.Dispatch<tournamentType[]>) => {
  axios
    .get(events)
    .then((res) => {
      setState(res.data.data);
    })
    .catch();
};

export const getPlayerInfo = (setState: React.Dispatch<PlayersData>, link: string) => {
  axios
    .get(link)
    .then((res) => {
      setState(res.data.data[0]);
    })
    .catch();
};

export const sendData = (
  setLoad: React.Dispatch<boolean>,
  setStatus: React.Dispatch<boolean>,
  setTriggered: React.Dispatch<boolean>,
  data: ContactData,
) => {
  const formData = new FormData();
  formData.append('name', data.name);
  formData.append('email', data.email);
  formData.append('message', data.message);
  axios
    .post(contact_us, formData)
    .then((res) => {
      if (res.data === 'Contact message sent') {
        setStatus(true);
      }
    })
    .catch(() => {
      setStatus(false);
    })
    .finally(() => {
      setLoad(false);
      setTriggered(true);
    });
};

export const checkDate = (setState: React.Dispatch<dateEventType>, date: string) => {
  axios
    .post(`${getDate}?date=${date}`)
    .then((res) => {
      setState(res.data);
    })
    .catch();
};
