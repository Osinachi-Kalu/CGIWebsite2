import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, TrendingUp } from 'lucide-react'

// Blog post data - in a real app, this would come from a database or CMS
const blogPosts: Record<string, any> = {
  'mastering-xauusd-gold-trading-strategies': {
    title: 'Mastering XAUUSD: 5 Key Strategies for Gold Trading',
    category: 'Strategy',
    readTime: '8 min read',
    date: 'December 15, 2025',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200',
    content: `
      <h2>Understanding XAUUSD Market Dynamics</h2>
      <p>Gold (XAUUSD) remains one of the most traded commodities in the forex market, offering unique opportunities for traders who understand its dynamics. This comprehensive guide will walk you through five essential strategies for successful gold trading.</p>
      
      <h2>Strategy 1: Trend Following</h2>
      <p>Gold tends to follow strong trends, making trend-following strategies particularly effective. Identify the primary trend using multiple timeframes and align your trades with the dominant direction. Use moving averages (20, 50, 200 EMA) to confirm trend strength and direction.</p>
      
      <h2>Strategy 2: Economic Calendar Awareness</h2>
      <p>Gold prices are heavily influenced by economic events, particularly US dollar strength, inflation data, and geopolitical tensions. Always check the economic calendar before trading and avoid major news releases unless you have a specific news trading strategy.</p>
      
      <h2>Strategy 3: Support and Resistance Levels</h2>
      <p>Gold respects key support and resistance levels remarkably well. Identify major psychological levels (round numbers like 1800, 1850, 1900) and historical price levels. These areas often provide excellent entry and exit opportunities.</p>
      
      <h2>Strategy 4: Risk Management</h2>
      <p>Never risk more than 1-2% of your account on a single gold trade. Gold can be volatile, with large price swings. Use appropriate position sizing and always place stop-loss orders to protect your capital.</p>
      
      <h2>Strategy 5: Session Timing</h2>
      <p>Gold is most active during London and New York sessions. The overlap between these sessions (8 AM - 12 PM EST) typically sees the highest volume and best trading opportunities. Avoid trading during low-volatility Asian session hours unless you have a specific strategy for ranging markets.</p>
      
      <h2>Conclusion</h2>
      <p>Mastering XAUUSD trading requires patience, discipline, and consistent application of proven strategies. Start with demo trading, backtest thoroughly, and gradually scale your position sizes as you gain confidence and experience.</p>
    `,
  },
  'psychology-of-trading-emotional-decisions': {
    title: 'The Psychology of Trading: Overcoming Emotional Decisions',
    category: 'Psychology',
    readTime: '6 min read',
    date: 'December 10, 2025',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200',
    content: `
      <h2>The Mental Game of Trading</h2>
      <p>Trading psychology is often the difference between consistent profitability and repeated losses. Even with a winning strategy, poor emotional control can lead to devastating results. Let's explore how to master your trading mindset.</p>
      
      <h2>Understanding Trading Emotions</h2>
      <p>Fear and greed are the two primary emotions that sabotage trading success. Fear causes traders to exit winning positions too early or avoid taking valid setups. Greed leads to overleveraging, holding losing positions too long, and chasing trades.</p>
      
      <h2>Developing Emotional Discipline</h2>
      <p>Create a detailed trading plan that covers every scenario. When emotions run high, your plan becomes your anchor. Follow it religiously, regardless of recent wins or losses. This removes emotional decision-making from the equation.</p>
      
      <h2>The Power of Journaling</h2>
      <p>Maintain a trading journal documenting not just your trades, but your emotional state during each trade. This self-awareness helps identify patterns and triggers that lead to emotional decisions. Review your journal weekly to learn from both successes and mistakes.</p>
      
      <h2>Managing Losses</h2>
      <p>Accept that losses are part of trading. What matters is your response to them. Never revenge trade or double down after a loss. Take a break, review what happened objectively, and return when you're emotionally ready.</p>
      
      <h2>Meditation and Mindfulness</h2>
      <p>Many successful traders practice meditation to enhance focus and emotional control. Even 10 minutes of daily meditation can significantly improve your ability to remain calm under pressure and make rational decisions.</p>
      
      <h2>Conclusion</h2>
      <p>Mastering trading psychology is a continuous journey. Be patient with yourself, celebrate small victories, and remember that emotional discipline is a skill that improves with practice and time.</p>
    `,
  },
  'risk-management-protecting-capital': {
    title: 'Risk Management: Protecting Your Trading Capital',
    category: 'Risk Management',
    readTime: '7 min read',
    date: 'December 5, 2025',
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1200',
    content: `
      <h2>The Foundation of Trading Success</h2>
      <p>Risk management is not just important—it's essential for long-term trading survival. You can have the best strategy in the world, but without proper risk management, one bad streak can wipe out your account.</p>
      
      <h2>The 1-2% Rule</h2>
      <p>Never risk more than 1-2% of your total account balance on a single trade. This ensures that even a series of losses won't significantly damage your account. For a $10,000 account, this means risking no more than $100-200 per trade.</p>
      
      <h2>Position Sizing</h2>
      <p>Calculate your position size based on your stop loss distance and risk tolerance. Use this formula: Position Size = (Account Size × Risk %) / (Stop Loss in Pips × Pip Value). This ensures consistent risk across all trades regardless of stop loss distance.</p>
      
      <h2>Stop Loss Placement</h2>
      <p>Always use stop losses—no exceptions. Place them at logical levels where your trading thesis is invalidated, not at arbitrary points. Consider support/resistance levels, volatility (ATR), and your strategy's requirements.</p>
      
      <h2>Risk-to-Reward Ratio</h2>
      <p>Aim for a minimum 1:2 risk-to-reward ratio on every trade. This means if you risk $100, you should target at least $200 profit. With proper R:R ratios, you can be profitable even with a 40% win rate.</p>
      
      <h2>Diversification</h2>
      <p>Don't put all your capital into one market or strategy. Diversify across different currency pairs, timeframes, or strategies to reduce overall portfolio risk. However, avoid over-diversification which can dilute your focus and returns.</p>
      
      <h2>Maximum Daily/Weekly Loss Limits</h2>
      <p>Set hard limits on how much you're willing to lose in a day or week. If you hit this limit, stop trading and take a break. This prevents emotional revenge trading and protects your capital during drawdown periods.</p>
      
      <h2>Conclusion</h2>
      <p>Remember: the goal is not to avoid losses entirely—that's impossible. The goal is to manage risk so that losses are small, controlled, and your account survives to capitalize on winning opportunities.</p>
    `,
  },
  'eurusd-analysis-major-currency-pair': {
    title: 'EURUSD Analysis: Understanding the Major Currency Pair',
    category: 'Market Analysis',
    readTime: '9 min read',
    date: 'November 28, 2025',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1200',
    content: `
      <h2>The World's Most Traded Currency Pair</h2>
      <p>EURUSD accounts for approximately 30% of daily forex trading volume, making it the most liquid and widely traded currency pair. Understanding its dynamics is essential for any serious forex trader.</p>
      
      <h2>Key Factors Affecting EURUSD</h2>
      <p>Several factors drive EURUSD movements: interest rate differentials between the ECB and Federal Reserve, economic data from the Eurozone and US, political developments, and global risk sentiment. Monitor these factors to anticipate major moves.</p>
      
      <h2>Trading Characteristics</h2>
      <p>EURUSD typically has tight spreads (often 0.5-1 pip), making it cost-effective to trade. It respects technical levels well and tends to trend strongly when major economic divergences occur between the EU and US.</p>
      
      <h2>Best Trading Times</h2>
      <p>EURUSD is most active during European (3 AM - 12 PM EST) and US (8 AM - 5 PM EST) trading sessions. The overlap period (8 AM - 12 PM EST) offers the highest volatility and best trading opportunities.</p>
      
      <h2>Technical Analysis Approaches</h2>
      <p>EURUSD responds well to various technical analysis methods including support/resistance, moving averages, Fibonacci levels, and chart patterns. Many successful traders use a combination of these tools for confirmation.</p>
      
      <h2>Fundamental Analysis</h2>
      <p>Key economic indicators to watch include: GDP growth rates, inflation (CPI), employment data (NFP), interest rate decisions, and central bank speeches. These often create significant volatility and trading opportunities.</p>
      
      <h2>Common Trading Strategies</h2>
      <p>Popular EURUSD strategies include trend following during strong directional moves, range trading during consolidation periods, and breakout trading around major economic releases. Choose strategies that match your personality and schedule.</p>
      
      <h2>Conclusion</h2>
      <p>EURUSD offers excellent opportunities for traders of all levels. Its liquidity, tight spreads, and predictable behavior make it ideal for both beginners and experienced traders. Start with small positions and gradually increase as you understand its characteristics better.</p>
    `,
  },
  'building-winning-trading-plan': {
    title: 'Building a Winning Trading Plan: A Step-by-Step Guide',
    category: 'Strategy',
    readTime: '10 min read',
    date: 'November 20, 2025',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200',
    content: `
      <h2>Why You Need a Trading Plan</h2>
      <p>A trading plan is your roadmap to consistent profitability. It removes emotion from decision-making, provides clarity during volatile markets, and creates accountability. Without a plan, you're gambling, not trading.</p>
      
      <h2>Step 1: Define Your Goals</h2>
      <p>Set specific, measurable, achievable, relevant, and time-bound (SMART) goals. Instead of "make money," aim for "achieve 15% annual return with maximum 20% drawdown." Clear goals guide every decision in your plan.</p>
      
      <h2>Step 2: Choose Your Markets</h2>
      <p>Select 2-3 instruments to focus on initially. Specialization beats diversification when learning. XAUUSD, EURUSD, or major stock indices are good starting points due to liquidity and predictability.</p>
      
      <h2>Step 3: Select Your Timeframes</h2>
      <p>Choose timeframes that match your lifestyle and personality. Full-time traders might use 1-hour charts, while those with day jobs might prefer 4-hour or daily charts. Consistency matters more than the specific timeframe.</p>
      
      <h2>Step 4: Define Your Strategy</h2>
      <p>Document your entry criteria, exit rules, and trade management approach. Be specific: "Enter long when price breaks above 50 EMA with RSI above 50 and confirmed by bullish candlestick pattern." Vague rules lead to inconsistent execution.</p>
      
      <h2>Step 5: Establish Risk Parameters</h2>
      <p>Define your risk per trade (1-2% recommended), maximum daily/weekly loss limits, position sizing methodology, and stop loss placement rules. These protect your capital and ensure longevity in the markets.</p>
      
      <h2>Step 6: Create Trading Routines</h2>
      <p>Develop pre-market, intra-market, and post-market routines. Pre-market: review economic calendar, check key levels. Intra-market: follow your plan strictly. Post-market: journal your trades, review performance, identify improvements.</p>
      
      <h2>Step 7: Performance Metrics</h2>
      <p>Track key metrics: win rate, average win/loss, profit factor, maximum drawdown, and risk-adjusted returns. Review these monthly to identify strengths and weaknesses in your approach.</p>
      
      <h2>Step 8: Continuous Improvement</h2>
      <p>Schedule regular reviews (weekly and monthly) to assess your plan's effectiveness. What's working? What isn't? Make data-driven adjustments, but avoid changing your plan based on short-term results.</p>
      
      <h2>Conclusion</h2>
      <p>Your trading plan is a living document. Start with these fundamentals, then refine based on experience and performance data. The most successful traders are those who consistently follow their well-crafted plan, not those who chase the latest strategy or indicator.</p>
    `,
  },
  'importance-of-backtesting-trading-strategy': {
    title: 'The Importance of Backtesting Your Trading Strategy',
    category: 'Education',
    readTime: '7 min read',
    date: 'November 15, 2025',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200',
    content: `
      <h2>Why Backtest?</h2>
      <p>Would you drive a car that's never been tested? Of course not. Yet many traders risk real money on untested strategies. Backtesting validates your approach, reveals weaknesses, and builds confidence before risking capital.</p>
      
      <h2>What is Backtesting?</h2>
      <p>Backtesting involves applying your trading strategy to historical price data to see how it would have performed. This process helps you understand your strategy's win rate, average profit/loss, maximum drawdown, and overall viability.</p>
      
      <h2>Manual vs. Automated Backtesting</h2>
      <p>Manual backtesting involves scrolling through historical charts and recording hypothetical trades. Automated backtesting uses software to test strategies across vast datasets. Both have merits—manual builds intuition, automated provides statistical rigor.</p>
      
      <h2>Key Metrics to Track</h2>
      <p>During backtesting, track: total number of trades, win rate, average win/loss, largest win/loss, maximum consecutive losses, maximum drawdown, profit factor, and Sharpe ratio. These metrics paint a complete picture of your strategy's performance.</p>
      
      <h2>Common Backtesting Mistakes</h2>
      <p>Avoid curve-fitting (over-optimizing for past data), cherry-picking time periods, ignoring transaction costs, and using unrealistic slippage assumptions. Your backtest should reflect real-world trading conditions as closely as possible.</p>
      
      <h2>Sample Size Matters</h2>
      <p>Test across at least 100-200 trades and multiple market conditions (trending, ranging, volatile, calm). A strategy that only works in one market environment isn't robust enough for live trading.</p>
      
      <h2>Forward Testing</h2>
      <p>After backtesting, forward test (paper trade) your strategy in real-time for 1-3 months. This validates your backtest results and helps you practice execution without risking capital.</p>
      
      <h2>The CGI Approach</h2>
      <p>Our 5-Day Bootcamp emphasizes extensive backtesting of one proven model. We teach you to extract crucial data points that differentiate consistent profitability from random success. This disciplined approach is what separates winners from losers.</p>
      
      <h2>Conclusion</h2>
      <p>Backtesting isn't optional—it's essential. It's the difference between trading and gambling. Invest time in thorough backtesting, and you'll trade with confidence, knowing your strategy has been proven under various market conditions.</p>
    `,
  },
}

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const post = blogPosts[params?.slug ?? '']
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    }
  }
  return {
    title: `${post?.title ?? 'Blog Post'} | CGI Blog`,
    description: post?.title ?? 'Trading insights from Capital Growth Investment',
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts[params?.slug ?? '']

  if (!post) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-8 bg-gradient-to-br from-black via-charcoal-gray to-black">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center space-x-2 text-gold hover:underline mb-6">
              <ArrowLeft size={20} />
              <span>Back to Blog</span>
            </Link>
            
            <div className="inline-block mb-4 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full">
              <span className="text-gold text-sm font-semibold">{post?.category}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {post?.title}
            </h1>
            
            <div className="flex items-center space-x-6 text-platinum-silver">
              <div className="flex items-center space-x-2">
                <Calendar size={18} />
                <span className="text-sm">{post?.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={18} />
                <span className="text-sm">{post?.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="section pt-0">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-12 bg-charcoal-gray">
              <Image
                src={post?.image ?? ''}
                alt={post?.title ?? 'Blog post'}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section pt-0">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div 
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post?.content ?? '' }}
            />
          </div>
        </div>
      </section>

      {/* Related Posts / CTA */}
      <section className="section bg-charcoal-gray/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Want to Learn <span className="text-gold">More?</span>
            </h2>
            <p className="text-platinum-silver mb-8">
              Explore our comprehensive trading programs and start your journey to consistent profitability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/bootcamp" className="btn-primary">
                View Bootcamp
              </Link>
              <Link href="/blog" className="btn-secondary">
                Read More Articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
