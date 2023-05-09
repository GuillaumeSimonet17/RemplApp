
// mettre en component
// faire en sorte que la range soit inter mois

import { NextPage } from "next";
import Navbar from '../../../../components/Navbar'
import React, { ChangeEventHandler, useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { addDays, format,  isAfter, isBefore, isValid, parse, isSameDay } from 'date-fns';
import { DayPicker, DayClickEventHandler, DateRange, SelectRangeEventHandler } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { fr } from 'date-fns/locale';

// https://react-day-picker.js.org/basics/navigation

let m = 0;
const date = new Date();
const pastMonth = new Date(2020, 10, 15);

const AgendaIndex: NextPage = () => {

    const [selectedRange, setSelectedRange] = useState<DateRange>();
    const [fromValue, setFromValue] = useState<string>('');
    const [toValue, setToValue] = useState<string>('');
    const [selectedDays, setSelectedDays] = useState<Date[]>([]);

    const handleFromChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFromValue(e.target.value);
    const date = parse(e.target.value, 'y-MM-dd', new Date());
    if (!isValid(date)) {
      return setSelectedRange({ from: undefined, to: undefined });
    }
    if (selectedRange?.to && isAfter(date, selectedRange.to)) {
      setSelectedRange({ from: selectedRange.to, to: date });
    } else {
      setSelectedRange({ from: date, to: selectedRange?.to });
    }
  };

  const handleToChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setToValue(e.target.value);
    const date = parse(e.target.value, 'y-MM-dd', new Date());

    if (!isValid(date)) {
      return setSelectedRange({ from: selectedRange?.from, to: undefined });
    }
    if (selectedRange?.from && isBefore(date, selectedRange.from)) {
      setSelectedRange({ from: date, to: selectedRange.from });
    } else {
      setSelectedRange({ from: selectedRange?.from, to: date });
    }
  };

  const handleRangeSelect: SelectRangeEventHandler = (
    range: DateRange | undefined
  ) => {
    setSelectedRange(range);
    if (range?.from) {
      setFromValue(format(range.from, 'y-MM-dd'));
    } else {
      setFromValue('');
    }
    if (range?.to) {
      setToValue(format(range.to, 'y-MM-dd'));
    } else {
      setToValue('');
    }
  };

  const handleDayClick: DayClickEventHandler = (day, modifiers) => {
    const newSelectedDays = [...selectedDays];
    if (modifiers.selected) {
      const index = selectedDays.findIndex((selectedDay) =>
        isSameDay(day, selectedDay)
      );
      newSelectedDays.splice(index, 1);
    } else {
      newSelectedDays.push(day);
    }
    setSelectedDays(newSelectedDays);
  };

  const handleResetClick = () => setSelectedDays([]);

  let footer = <p>Please pick one or more days.</p>;

  if (selectedDays.length > 0)
    footer = (
      <p>
        You selected {selectedDays.length} days.{' '}
        <button onClick={handleResetClick}>Reset</button>
      </p>
    );


    return (
        <div className="agenda">
            <Navbar />
            <DayPicker
                locale={fr}
                // onDayClick={handleDayClick}
                id="test"
                mode="range"
                defaultMonth={pastMonth}
                // required
                selected={selectedRange}
                onSelect={handleRangeSelect}

                // footer={
                //     <form className="ma2">
                //       <input
                //         size={10}
                //         placeholder="From Date"
                //         value={fromValue}
                //         onChange={handleFromChange}
                //         className="input-reset pa2 ma bg-white black ba"
                //       />
                //       {' – '}
                //       <input
                //         size={10}
                //         placeholder="To Date"
                //         value={toValue}
                //         onChange={handleToChange}
                //         className="input-reset pa2 bg-white black ba"
                //       />
                //     </form>
                //   }
                captionLayout="dropdown-buttons" fromYear={2023} toYear={2030}
                // showOutsideDays 
                // fixedWeeks
                // showWeekNumber
            />
            
            <div className="month_of_remplas">
                <hr />
                <span>Mars</span> 
                {/* en dur pour le moment */}
                <hr />
            </div>

            <div className="next_remplas">
                <div className="next_remplas_container">
                    <div className="card">
                            <div className="duration">
                                <div className="start">
                                    <div className="day">Lun</div>
                                    <div className="day_nb">13</div>
                                </div>
                                <div className="end">
                                    <div className="day">Ven</div>
                                    <div className="day_nb">17</div>
                                </div>
                            </div>
                            <div className="intern_card">
                                <div className="intern_card_container">
                                    <div className="top-container">
                                        <div className="top">
                                            <span className="drName">Dr Charlotte</span>
                                            <div className="state">
                                                <FontAwesomeIcon icon={faCheckCircle} className="chec icon"/>
                                                <span>Confirmé</span>
                                            </div>
                                        </div>
                                        <div className="middle">
                                            <div className="info">
                                                <span>Medecine Generale</span>
                                                <span>•</span>
                                                <span>Thésé</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="location">
                                            <FontAwesomeIcon icon={faMapPin} className="map_market icon"/>
                                            <span>Cabinet Dr Lucas</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default AgendaIndex;