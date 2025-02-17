import Button from '@/components/common/Button'
import ChatAnimation from '@/components/sections/ChatAnimation'
import Image from 'next/image'
import LogoScroll from './LogoScroll'

export default function Hero() {
  return (
    <>
      <section id="hero" className="min-h-screen relative overflow-hidden flex items-center">
        {/* 背景装饰 */}
        <div className="absolute inset-0 -z-10">
          {/* 左上角装饰 */}
          <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
          {/* 右下角装饰 */}
          <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
          {/* 网格背景 */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, gray 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        {/* 装饰图片 */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          {/* 左侧装饰 */}
          <div className="absolute top-1/4 left-10 hidden lg:block">
            <Image
              src="/home/1.avif"
              alt=""
              width={120}
              height={120}
              className="opacity-20"
            />
          </div>
          {/* 右侧装饰 */}
          <div className="absolute bottom-1/4 right-10 hidden lg:block">
            <Image
              src="/home/3.avif"
              alt=""
              width={150}
              height={150}
              className="opacity-20"
            />
          </div>
          {/* 浮动图标 */}
          <div className="absolute top-1/3 right-1/4 hidden lg:block">
            <div className="animate-float">
              <Image
                src="/home/2.avif"
                alt=""
                width={40}
                height={40}
                className="opacity-60"
              />
            </div>
          </div>
          <div className="absolute bottom-1/3 left-1/4 hidden lg:block">
            <div className="animate-float-delay">
              <Image
                src="/home/5.avif"
                alt=""
                width={40}
                height={40}
                className="opacity-60"
              />
            </div>
          </div>
        </div>

        {/* 主要内容 */}
        <div className="w-full pt-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* 左侧文字部分 */}
              <div className="text-center lg:text-left order-2 lg:order-1">
                {/* 3D Logo */}
                <div className="relative w-24 h-24 mx-auto lg:mx-0 mb-8 group">
                  <Image
                    src="/home/4.avif"
                    alt="NSR Protocol Logo"
                    width={96}
                    height={96}
                    className="animate-spin-slow hover:pause-animation"
                    style={{ animationDuration: '60s' }}
                  />
                </div>

                <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px] leading-tight font-bold mb-6 lg:mb-8 bg-gradient-to-tr from-gray-600 via-gray-200 to-white bg-clip-text text-transparent">
                  New Silk Road
                  <br />
                  <span className="text-[30px] sm:text-[40px] md:text-[45px] lg:text-[65px]">
                    Protocol
                  </span>
                </h1>
                <p className="text-gray-400 text-base sm:text-lg lg:text-xl mb-8 lg:mb-12 max-w-xl mx-auto lg:mx-0">
                  A next-generation blockchain infrastructure that bridges TradFi with DeFi through 
                  advanced RWA tokenization and hybrid security architecture.
                </p>

                {/* 邮箱订阅部分 */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
                  <input
                    type="email"
                    placeholder="Enter your email for updates"
                    className="bg-dark-200 px-6 py-3 rounded-lg w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-200 placeholder-gray-500"
                  />
                  <Button 
                    className="w-full sm:w-auto bg-primary text-black hover:bg-primary/90 font-medium px-8"
                  >
                    Subscribe
                  </Button>
                </div>

                {/* 标签 */}
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {[
                    'Hybrid Security', 
                    'RWA Integration', 
                    'Cross-chain Interoperability'
                  ].map((tag) => (
                    <span 
                      key={tag}
                      className="px-4 py-2 rounded-full bg-dark-100 text-gray-400 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 右侧对话动画部分 */}
              <div className="relative order-1 lg:order-2">
                {/* 背景装饰 */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-3xl -z-10" />
                
                {/* 顶部装饰条 */}
                <div className="bg-dark-100 rounded-t-2xl p-3 sm:p-4 mb-2 sm:mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">Live Chat</div>
                  <div className="w-12 sm:w-16" />
                </div>
                
                {/* 聊天动画 */}
                <div className="bg-dark-100/50 backdrop-blur-sm rounded-b-2xl p-4 sm:p-6">
                  <ChatAnimation />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LogoScroll />
    </>
  )
} 