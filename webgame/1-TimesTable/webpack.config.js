const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map', // 소스맵 설정

  resolve: {
    extensions: ['.jsx', '.js'], // 확장자 자동 처리
  },

  entry: {
    app: './client', // 진입점 파일
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { // options를 여기로 이동
            presets: [
              ['@babel/preset-env', {
                targets: {
                  browsers: ['> 1% in KR'], // 한국 점유율 1% 이상 브라우저
                },
                debug: true,
              }],
              '@babel/preset-react',
            ],
            plugins: [], // 필요하면 추가
          },
        },
      },
    ],
  },

  output: {
    filename: 'app.js', // 출력 파일명
    path: path.join(__dirname, 'dist'), // 출력 경로
  },
};
