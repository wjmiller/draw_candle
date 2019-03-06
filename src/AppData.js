const AppData = {
  activities: [{
      id: "samecandle",
      candles: [{
          pricechart: {},
          candlechart: {
            theme: 'dark',
            cdata: {
              theme: 'dark',
              prices: [10, 8, 6, 4, 2, 0],
              timeIntervals: ['10', '11', '12', '13', '14', '15'],
              timeLabel: 'Hr',
              pricePoints: [4, 5, 2, 8, 3, 6]
            },
            csdata: {
              open: 4,
              close: 6,
              high: 8,
              low: 2,
              candleRed: false
            }
          },
          feedback: {}
        },
        {
          pricechart: {},
          candlechart: {
            theme: 'dark',
            cdata: {
              theme: 'dark',
              prices: [10, 8, 6, 4, 2, 0],
              timeIntervals: ['2/22', '2/25', '2/26', '2/27', '2/28'],
              timeLabel: 'Day',
              pricePoints: [4, 2, 3, 8, 6]
            },
            csdata: {
              open: 4,
              close: 6,
              high: 8,
              low: 2,
              candleRed: false
            }
          },
          feedback: {}
        }
      ],
      questions: [{
        instruction: "Build the candles in this group correctly to view the question.",
        question: "Why are the two candles the same even though the two charts are different time frames?",
        feedback: {
          correct: "Even though there are two different time frames, the two candles have the exact same open, close, high and low values.",
        }
      }]
    },
    {
      id: "nowick",
      candles: [{
          pricechart: {},
          candlechart: {
            theme: 'dark',
            cdata: {
              theme: 'dark',
              prices: [10, 8, 6, 4, 2, 0],
              timeIntervals: ['2/22', '2/25', '2/26', '2/27', '2/28'],
              timeLabel: 'Day',
              pricePoints: [10, 4, 3, 10, 3]
            },
            csdata: {
              open: 10,
              close: 3,
              high: 10,
              low: 3,
              candleRed: true
            }
          },
          feedback: {}
        },
        {
          pricechart: {},
          candlechart: {
            theme: 'dark',
            cdata: {
              theme: 'dark',
              prices: [10, 8, 6, 4, 2, 0],
              timeIntervals: ['10', '11', '12', '13', '14', '15'],
              timeLabel: 'Hr',
              pricePoints: [5, 5, 7, 6, 7, 8]
            },
            csdata: {
              open: 5,
              close: 8,
              high: 8,
              low: 5,
              candleRed: false
            }
          },
          feedback: {}
        }
      ],
      questions: [{
        instruction: "Build the candles in this group correctly to view the question.",
        question: "What does a candlestick tell you when no wick is showing?",
        feedback: {
          correct: "When no wick is showing, it means that the high and low are also the opening and closing value of the candle.",
        }
      }]
    },
    {
      id: "differentcolor",
      candles: [{
          pricechart: {},
          candlechart: {
            theme: 'dark',
            cdata: {
              theme: 'dark',
              prices: [10, 8, 6, 4, 2, 0],
              timeIntervals: ['10', '11', '12', '13', '14', '15'],
              timeLabel: 'Hr',
              pricePoints: [3, 1, 5, 6, 4, 9]
            },
            csdata: {
              open: 3,
              close: 9,
              high: 9,
              low: 1,
              candleRed: false
            }
          },
          feedback: {}
        },
        {
          pricechart: {},
          candlechart: {
            theme: 'dark',
            cdata: {
              theme: 'dark',
              prices: [10, 8, 6, 4, 2, 0],
              timeIntervals: ['2/22', '2/25', '2/26', '2/27', '2/28'],
              timeLabel: 'Day',
              pricePoints: [9, 1, 5, 1, 3]
            },
            csdata: {
              open: 9,
              close: 3,
              high: 9,
              low: 1,
              candleRed: true
            }
          },
          feedback: {}
        }
      ],
      questions: [{
        instruction: "Build the candles in this group correctly to view the question.",
        question: "If two candles are the same except for the color of the body, what does it mean?",
        feedback: {
          correct: "Two identical candles mean that the high and low values were the same, but the opening and closing values are reversed. The bottom of the green candle is the opening and the top the closing. The bottom of the red candle is the closing and the top the opening.",
        }
      }]
    },
    {
      id: "shortbodywick",
      candles: [{
          pricechart: {},
          candlechart: {
            theme: 'dark',
            cdata: {
              theme: 'dark',
              prices: [10, 8, 6, 4, 2, 0],
              timeIntervals: ['10', '11', '12', '13', '14', '15'],
              timeLabel: 'Hr',
              pricePoints: [9, 10, 10, 9, 7, 8]
            },
            csdata: {
              open: 9,
              close: 8,
              high: 10,
              low: 7,
              candleRed: true
            }
          },
          feedback: {}
        },
        {
          pricechart: {},
          candlechart: {
            theme: 'dark',
            cdata: {
              theme: 'dark',
              prices: [10, 8, 6, 4, 2, 0],
              timeIntervals: ['2/22', '2/25', '2/26', '2/27', '2/28'],
              timeLabel: 'Day',
              pricePoints: [3, 2, 3, 4, 5]
            },
            csdata: {
              open: 3,
              close: 5,
              high: 5,
              low: 2,
              candleRed: false
            }
          },
          feedback: {}
        }
      ],
      questions: [{
        instruction: "Build the candles in this group correctly to view the question.",
        question: "What do short candle bodies with short wicks tell you about price in the represented time period?",
        feedback: {
          correct: "Short bodies with short wicks tell you that price did not change much in the represented time period.",
        }
      }]
    },
    {
      id: "shortbodylongwick",
      candles: [{
          pricechart: {},
          candlechart: {
            theme: 'dark',
            cdata: {
              theme: 'dark',
              prices: [10, 8, 6, 4, 2, 0],
              timeIntervals: ['10', '11', '12', '13', '14', '15'],
              timeLabel: 'Hr',
              pricePoints: [4, 2, 1, 7, 10, 6]
            },
            csdata: {
              open: 4,
              close: 6,
              high: 10,
              low: 1,
              candleRed: false
            }
          },
          feedback: {}
        },
        {
          pricechart: {},
          candlechart: {
            theme: 'dark',
            cdata: {
              theme: 'dark',
              prices: [10, 8, 6, 4, 2, 0],
              timeIntervals: ['2/22', '2/25', '2/26', '2/27', '2/28'],
              timeLabel: 'Day',
              pricePoints: [7, 9, 2, 1, 6]
            },
            csdata: {
              open: 7,
              close: 6,
              high: 9,
              low: 1,
              candleRed: true
            }
          },
          feedback: {}
        }
      ],
      questions: [{
        instruction: "Build the candles in this group correctly to view the question.",
        question: "What do short candle bodies with long wicks tell you about price in the represented time period?",
        feedback: {
          correct: "Short bodies and long wicks tell you that price fluctuated greatly in the represented time period, but the opening and closing price were not very different.",
        }
      }]
    },
    {
      id: "longbodywick",
      candles: [{
          pricechart: {},
          candlechart: {
            theme: 'dark',
            cdata: {
              theme: 'dark',
              prices: [10, 8, 6, 4, 2, 0],
              timeIntervals: ['10', '11', '12', '13', '14', '15'],
              timeLabel: 'Hr',
              pricePoints: [2, 5, 2, 8, 3, 10]
            },
            csdata: {
              open: 2,
              close: 10,
              high: 10,
              low: 2,
              candleRed: false
            }
          },
          feedback: {}
        },
        {
          pricechart: {},
          candlechart: {
            theme: 'dark',
            cdata: {
              theme: 'dark',
              prices: [10, 8, 6, 4, 2, 0],
              timeIntervals: ['2/22', '2/25', '2/26', '2/27', '2/28'],
              timeLabel: 'Day',
              pricePoints: [9, 4, 5, 1, 2]
            },
            csdata: {
              open: 9,
              close: 2,
              high: 9,
              low: 1,
              candleRed: true
            }
          },
          feedback: {}
        }
      ],
      questions: [{
        instruction: "Build the candles in this group correctly to view the question.",
        question: "What do long candle bodies with small or no wicks tell you about the change of price in the given time period?",
        feedback: {
          correct: "Long candle bodies tell you that the opening and closing prices moved a great distance. Green bodies indicate that the closing price was much greater than the opening and red bodies indicate that the closing price was a lot less that the opening.",
        }
      }]
    }
  ]
}
export default AppData