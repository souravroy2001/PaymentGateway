'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Zap, Globe, CreditCard, Smartphone, Lock, TrendingUp, Users, CheckCircle, Star, Plus } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">PayFlow</span>
              <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                BUSINESS
              </Badge>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#solutions" className="text-slate-300 hover:text-white transition-colors">Our Solutions</a>
              <a href="#benefits" className="text-slate-300 hover:text-white transition-colors">Our Benefits</a>
              <a href="#integration" className="text-slate-300 hover:text-white transition-colors">Integration</a>
              <a href="#reviews" className="text-slate-300 hover:text-white transition-colors">Reviews</a>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                LOG IN
              </Button>
              <div className="w-12 h-6 bg-slate-700 rounded-full relative">
                <div className="w-5 h-5 bg-cyan-400 rounded-full absolute top-0.5 right-0.5 transition-all"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  BRIDGING
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    THE GAP BETWEEN
                  </span>
                  <br />
                  BUSINESS AND PAYMENTS
                </h1>
                
                <div className="space-y-4 text-slate-300">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span>Licensed payment provider (PCI DSS)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span>Instant payment processing worldwide</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span>One API. Global Coverage</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span>150+ payment methods, card acquiring and local payment methods</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span>Mass Payout in multiple currencies</span>
                  </div>
                </div>

                <div className="flex space-x-4 pt-6">
                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 text-lg">
                    GET STARTED
                  </Button>
                  <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 px-8 py-3 text-lg">
                    TRY DEMO
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-2xl">
                  <div className="bg-white rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded"></div>
                        <span className="font-semibold text-slate-800">PayFlow</span>
                      </div>
                      <span className="text-sm text-slate-500">Transaction history</span>
                    </div>
                    
                    <div className="space-y-3">
                      {[
                        { id: "TXN-001", amount: "$2,450.00", status: "Completed", method: "Credit Card" },
                        { id: "TXN-002", amount: "$1,200.50", status: "Processing", method: "Bank Transfer" },
                        { id: "TXN-003", amount: "$850.75", status: "Completed", method: "Digital Wallet" },
                        { id: "TXN-004", amount: "$3,200.00", status: "Completed", method: "Wire Transfer" },
                      ].map((transaction, index) => (
                        <motion.div
                          key={transaction.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
                        >
                          <div>
                            <div className="font-medium text-slate-800">{transaction.id}</div>
                            <div className="text-sm text-slate-500">{transaction.method}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-slate-800">{transaction.amount}</div>
                            <div className={`text-sm ${transaction.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'}`}>
                              {transaction.status}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gradient-to-r from-teal-900/50 to-cyan-900/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-12"
          >
            WRITE A REVIEW ABOUT US
          </motion.h2>
          
          <div className="flex justify-center space-x-8">
            {[
              { icon: "trustpilot", name: "Trustpilot" },
              { icon: "star", name: "Reviews" },
              { icon: "plus", name: "More" }
            ].map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-20 h-20 border-2 border-cyan-400/50 rounded-lg rotate-45 flex items-center justify-center hover:border-cyan-400 transition-colors cursor-pointer"
              >
                <div className="-rotate-45">
                  {platform.icon === "star" && <Star className="w-8 h-8 text-cyan-400" />}
                  {platform.icon === "plus" && <Plus className="w-8 h-8 text-cyan-400" />}
                  {platform.icon === "trustpilot" && <Shield className="w-8 h-8 text-cyan-400" />}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-4"
          >
            ACCEPTING 150+ PAYMENT METHODS WORLDWIDE
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mt-12">
            {[
              "VISA", "MC", "AMEX", "DISCOVER", "PAYPAL", "APPLE PAY", "GOOGLE PAY", "STRIPE",
              "SQUARE", "KLARNA", "AFTERPAY", "ZELLE", "VENMO", "CASHAPP", "BITCOIN", "ETHEREUM"
            ].map((method, index) => (
              <motion.div
                key={method}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-slate-800 rounded-lg p-4 border border-slate-700 hover:border-cyan-500/50 transition-colors"
              >
                <div className="w-12 h-12 bg-slate-700 rounded-lg mx-auto flex items-center justify-center">
                  <span className="text-xs font-bold text-slate-300">{method.slice(0, 3)}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Conversion Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold text-white mb-6">
                High-conversion
                <br />
                payment methods
                <br />
                for
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                  online businesses
                </span>
              </h2>
              
              <p className="text-slate-300 text-lg mb-8">
                Cards and alternative methods, backed by features for higher
                approval rates and robust anti-fraud protection.
              </p>
              
              <Button className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 text-lg">
                Join our community →
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* 3D Payment Cards */}
                <div className="space-y-4">
                  <motion.div
                    animate={{ 
                      rotateY: [0, 5, 0],
                      rotateX: [0, 2, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 text-black shadow-2xl transform rotate-3"
                  >
                    <div className="flex justify-between items-start mb-8">
                      <div className="text-sm font-medium">BALANCE</div>
                      <div className="w-8 h-8 bg-black/20 rounded-full"></div>
                    </div>
                    <div className="text-2xl font-bold mb-2">4,275.00</div>
                    <div className="text-sm opacity-80">USD</div>
                  </motion.div>

                  <motion.div
                    animate={{ 
                      rotateY: [0, -3, 0],
                      rotateX: [0, -1, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                    className="bg-white rounded-2xl p-6 text-black shadow-2xl transform -rotate-2 ml-8"
                  >
                    <div className="flex justify-between items-start mb-8">
                      <div className="text-sm font-medium text-slate-600">BALANCE</div>
                      <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
                    </div>
                    <div className="text-2xl font-bold mb-2">$6,285.50</div>
                    <div className="text-sm text-slate-600">USD</div>
                  </motion.div>

                  <motion.div
                    animate={{ 
                      rotateY: [0, 4, 0],
                      rotateX: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white shadow-2xl transform rotate-1 mr-8"
                  >
                    <div className="flex justify-between items-start mb-8">
                      <div className="text-sm font-medium opacity-80">BALANCE</div>
                      <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                    </div>
                    <div className="text-2xl font-bold mb-2">3,853</div>
                    <div className="text-sm opacity-80">ETH</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10+", label: "Years of experience" },
              { number: "30+", label: "Ready-to-go payment methods" },
              { number: "1st", label: "Authorized Channel Partner" },
              { number: "24/7", label: "Customer support" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="text-6xl font-bold text-white">{stat.number}</div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            GET INTO A TRILLION-DOLLAR MARKET
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Advanced Security",
                description: "PCI DSS compliant with advanced fraud protection and real-time monitoring."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Lightning Fast",
                description: "Process payments in milliseconds with 99.9% uptime guarantee."
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Reach",
                description: "Accept payments from customers worldwide with local payment methods."
              },
              {
                icon: <CreditCard className="w-8 h-8" />,
                title: "Multiple Methods",
                description: "Support for cards, digital wallets, bank transfers, and crypto payments."
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Mobile Optimized",
                description: "Seamless mobile experience with responsive design and native apps."
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Analytics & Insights",
                description: "Detailed reporting and analytics to optimize your payment performance."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-slate-800 border-slate-700 p-6 hover:border-cyan-500/50 transition-colors">
                  <div className="text-cyan-400 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-cyan-900 to-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to transform your payment experience?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Join thousands of businesses that trust PayFlow for their payment processing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 text-lg">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">PayFlow</span>
              </div>
              <p className="text-slate-400">
                The future of payment processing for modern businesses.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Solutions</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Payment Gateway</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile Payments</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Recurring Billing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fraud Protection</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 PayFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
