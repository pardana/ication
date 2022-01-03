import React, { useState, useRef, useEffect } from "react";
import propTypes from "prop-types";

import { DateRange } from "react-date-range";

import "./index.scss";
import "react-date-range/dist/style.css"; //main css file
import "react-date-range/dist/theme/default.css"; //the css file

import formatDate from "utils/formatDate";
import iconCalendar from "assets/images/icons/icon_calendar.svg";
