export default function Careers() {
  return (
    <section id="careers" className="py-24 px-4 bg-dark-100/50 relative overflow-hidden">
      {/* 背景动画 */}
      <div className="absolute inset-0 -z-10">
        <svg 
          viewBox="0 0 100 100" 
          className="absolute right-0 top-0 w-[800px] h-[800px] text-primary/10"
          fill="currentColor"
        >
          {/* 网格背景 */}
          <pattern
            id="careers-grid"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.2"
              opacity="0.3"
            />
          </pattern>
          <rect width="100" height="100" fill="url(#careers-grid)" />

          {/* 动态波浪效果 */}
          <g className="opacity-50">
            {[...Array(3)].map((_, i) => (
              <path
                key={i}
                d={`
                  M 0 ${50 + i * 10}
                  Q 25 ${45 + i * 10} 50 ${50 + i * 10}
                  T 100 ${50 + i * 10}
                `}
                fill="none"
                stroke="currentColor"
                strokeWidth="0.3"
                className="text-primary"
              >
                <animate
                  attributeName="d"
                  dur={`${6 + i * 2}s`}
                  repeatCount="indefinite"
                  values={`
                    M 0 ${50 + i * 10} Q 25 ${45 + i * 10} 50 ${50 + i * 10} T 100 ${50 + i * 10};
                    M 0 ${50 + i * 10} Q 25 ${55 + i * 10} 50 ${50 + i * 10} T 100 ${50 + i * 10};
                    M 0 ${50 + i * 10} Q 25 ${45 + i * 10} 50 ${50 + i * 10} T 100 ${50 + i * 10}
                  `}
                />
              </path>
            ))}
          </g>

          {/* 浮动粒子 */}
          {[...Array(8)].map((_, i) => (
            <circle
              key={i}
              r="0.5"
              className="text-primary"
              opacity="0.5"
            >
              <animate
                attributeName="cx"
                dur={`${10 + i * 2}s`}
                values={`${10 + i * 10};${90 - i * 10};${10 + i * 10}`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="cy"
                dur={`${8 + i * 2}s`}
                values={`${20 + i * 5};${80 - i * 5};${20 + i * 5}`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="r"
                dur={`${2 + i}s`}
                values="0.5;1;0.5"
                repeatCount="indefinite"
              />
            </circle>
          ))}

          {/* 中心光环 */}
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.2">
            <animate
              attributeName="r"
              dur="8s"
              values="15;25;15"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              dur="8s"
              values="0.3;0.1;0.3"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.2">
            <animate
              attributeName="r"
              dur="8s"
              values="25;35;25"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              dur="8s"
              values="0.2;0.05;0.2"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      {/* 添加右下角装饰 */}
      <div className="absolute right-0 bottom-0 -z-10">
        <svg 
          viewBox="0 0 100 100" 
          className="w-[400px] h-[400px] text-primary/10"
          fill="currentColor"
        >
          {/* 装饰性线条 */}
          <g className="opacity-30">
            {[...Array(5)].map((_, i) => (
              <path
                key={i}
                d={`M ${80 - i * 15} 100 L 100 ${80 - i * 15}`}
                stroke="currentColor"
                strokeWidth="0.3"
                fill="none"
              >
                <animate
                  attributeName="opacity"
                  dur={`${3 + i}s`}
                  values="0.3;0.6;0.3"
                  repeatCount="indefinite"
                />
              </path>
            ))}
          </g>

          {/* 动态点阵 */}
          <g className="opacity-40">
            {[...Array(4)].map((_, i) => (
              <g key={i}>
                {[...Array(4)].map((_, j) => (
                  <circle
                    key={`${i}-${j}`}
                    cx={70 + i * 8}
                    cy={70 + j * 8}
                    r="0.5"
                    fill="currentColor"
                  >
                    <animate
                      attributeName="r"
                      dur={`${2 + (i + j) * 0.5}s`}
                      values="0.5;1;0.5"
                      repeatCount="indefinite"
                    />
                  </circle>
                ))}
              </g>
            ))}
          </g>

          {/* 弧形装饰 */}
          <path
            d="M 100 50 A 50 50 0 0 1 50 100"
            stroke="currentColor"
            strokeWidth="0.2"
            fill="none"
            className="opacity-20"
          >
            <animate
              attributeName="stroke-dasharray"
              dur="8s"
              values="0 200;200 0;0 200"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      {/* 渐变遮罩调整 */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-dark-100/80 via-transparent to-dark-100/60" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="text-primary mb-2 inline-block">Join Our Team</span>
          <h2 className="text-[32px] sm:text-[40px] font-bold mb-4 bg-gradient-to-tr from-gray-500 via-gray-300 to-gray-100 bg-clip-text text-transparent">
            We&apos;re Hiring Web3 Talents
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Looking for experienced Web3 developers, blockchain architects, and RWA integration specialists to join our innovative team. Help us build the future of real-world asset tokenization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* 左侧职位列表 */}
          <div className="space-y-4">
            <div className="bg-dark-100 p-6 rounded-xl hover:bg-dark-200 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-2">Smart Contract Developer</h3>
              <p className="text-gray-400 mb-4">Build and audit secure smart contracts for RWA tokenization</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Solidity</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Web3.js</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">DeFi</span>
              </div>
            </div>

            <div className="bg-dark-100 p-6 rounded-xl hover:bg-dark-200 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-2">Frontend Engineer</h3>
              <p className="text-gray-400 mb-4">Create intuitive interfaces for our RWA platform</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">React</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">TypeScript</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Web3</span>
              </div>
            </div>

            <div className="bg-dark-100 p-6 rounded-xl hover:bg-dark-200 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-2">Blockchain Architect</h3>
              <p className="text-gray-400 mb-4">Design scalable blockchain solutions for real-world assets</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Architecture</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Consensus</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">L2</span>
              </div>
            </div>
          </div>

          {/* 右侧联系方式和动画 */}
          <div className="relative">
            <div className="bg-dark-100 p-8 rounded-xl mb-8">
              <h3 className="text-xl font-bold mb-4">Join Us</h3>
              <p className="text-gray-400 mb-6">
                Connect with us on social media or send your resume directly. We&apos;re always looking for talented individuals to join our team.
              </p>
              <div className="flex gap-4 mt-8">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-dark-200 hover:bg-dark-300 text-primary rounded-lg transition-colors duration-300"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 50 50"
                    className="w-5 h-5"
                    fill="currentColor"
                  >
                    <path d="M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z" />
                  </svg>
                  <span className="font-medium">Twitter</span>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-dark-200 hover:bg-dark-300 text-primary rounded-lg transition-colors duration-300"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 50 50"
                    className="w-5 h-5"
                    fill="currentColor"
                  >
                    <path d="M 25 2 C 12.309288 2 2 12.309297 2 25 C 2 37.690703 12.309288 48 25 48 C 37.690712 48 48 37.690703 48 25 C 48 12.309297 37.690712 2 25 2 z M 25 4 C 36.609833 4 46 13.390175 46 25 C 46 36.609825 36.609833 46 25 46 C 13.390167 46 4 36.609825 4 25 C 4 13.390175 13.390167 4 25 4 z M 34.087891 14.035156 C 33.403891 14.035156 32.635328 14.193578 31.736328 14.517578 C 30.340328 15.020578 13.920734 21.992156 12.052734 22.785156 C 10.984734 23.239156 8.9960938 24.083656 8.9960938 26.097656 C 8.9960938 27.432656 9.7783594 28.3875 11.318359 28.9375 C 12.146359 29.2325 14.112906 29.828578 15.253906 30.142578 C 15.737906 30.275578 16.25225 30.34375 16.78125 30.34375 C 17.81625 30.34375 18.857828 30.085859 19.673828 29.630859 C 19.666828 29.798859 19.671406 29.968672 19.691406 30.138672 C 19.814406 31.188672 20.461875 32.17625 21.421875 32.78125 C 22.049875 33.17725 27.179312 36.614156 27.945312 37.160156 C 29.021313 37.929156 30.210813 38.335938 31.382812 38.335938 C 33.622813 38.335938 34.374328 36.023109 34.736328 34.912109 C 35.261328 33.299109 37.227219 20.182141 37.449219 17.869141 C 37.600219 16.284141 36.939641 14.978953 35.681641 14.376953 C 35.210641 14.149953 34.672891 14.035156 34.087891 14.035156 z" />
                  </svg>
                  <span className="font-medium">Telegram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 