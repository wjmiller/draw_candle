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
        instruction: "Draw candles 1 and 2 correctly to view this question.",
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
        instruction: "Draw candles 3 and 4 correctly to view this question.",
        question: "What does a candlestick tell you when no wick is showing?",
        feedback: {
          correct: "When no wick is showing, it means that the high and low are also the opening and closing value of the candle.",
        }
      }]
    }
  ]
}
export default AppData