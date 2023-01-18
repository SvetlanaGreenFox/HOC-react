/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import DateTimePretty from './DateTimePretty';

export default function Video(props) {
  return (
    <div className="video">
      <iframe
        src={props.url}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
      <DateTimePretty date={props.date} />
    </div>
  );
}