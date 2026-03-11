'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { FieldGroup, Field, FieldLabel } from '@/components/ui/field';
import { Mail, Phone, Instagram, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const [registering, setRegistering] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', age: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistering(true);
    setTimeout(() => {
      setRegistering(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', age: '', phone: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <main className="bg-gradient-to-br from-amber-50 via-blue-50 to-amber-100 min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-900 via-blue-800 to-amber-900 backdrop-blur border-b-4 border-amber-400 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="First Ride Academy"
              width={50}
              height={50}
              className="rounded-full border-2 border-amber-300"
            />
            <div>
              <h1 className="text-amber-100 font-bold text-xl tracking-wider">FIRST RIDE</h1>
              <p className="text-amber-300 text-xs font-semibold">SKATING ACADEMY</p>
            </div>
          </div>
          <a
            href="https://instagram.com/first_ride_skating_academy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-300 hover:text-amber-100 transition text-sm font-bold"
          >
            <Instagram size={24} />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-blue-50 to-white py-20 sm:py-32">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/vintage-skating-1.jpg"
            alt="Skating action"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="mb-6">
                <Image
                  src="/logo.jpg"
                  alt="First Ride Academy Logo"
                  width={200}
                  height={200}
                  className="mx-auto md:mx-0 drop-shadow-xl"
                />
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold text-blue-900 mb-4 text-balance" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
                JOIN WITH US!
              </h2>
              <div className="bg-white border-4 border-blue-900 rounded-lg p-6 mb-6 shadow-lg">
                <p className="text-xl text-blue-900 font-bold mb-3">
                  FOUNDER & COACH: @skater_rohan
                </p>
                <p className="text-blue-800 mb-2">
                  Learn roller skating from <span className="font-bold text-amber-600">Coach Rohan Kalle</span>, with 9 years of experience and training 300+ students.
                </p>
                <p className="flex items-center gap-2 text-blue-900 font-bold">
                  <span className="text-2xl">📱</span> CONTACT: 8374691285
                </p>
              </div>
              <div className="space-y-2 text-blue-800 mb-8 font-semibold">
                <p className="flex items-center gap-2">
                  <span className="text-2xl">⏰</span> Timings: 5:00pm to 6:30pm (Mon-Fri)
                </p>
                <p className="text-lg text-amber-600 font-bold">Keep Rolling, Keep Growing!</p>
              </div>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-900 to-amber-700 hover:from-blue-800 hover:to-amber-600 text-amber-50 font-bold text-lg"
                onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Register Now
              </Button>
            </div>
            <div className="hidden md:flex justify-center">
              <Image
                src="/logo.jpg"
                alt="Academy Logo"
                width={350}
                height={350}
                className="drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coach Profile */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-amber-900">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-amber-100 text-center mb-12 tracking-wide">MEET YOUR COACH</h3>
          <Card className="bg-amber-50 border-4 border-amber-400 shadow-2xl">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-900 to-amber-700 rounded-full flex items-center justify-center text-5xl border-4 border-amber-400">
                  ⛸️
                </div>
                <div>
                  <CardTitle className="text-3xl text-blue-900">Rohan Kalle</CardTitle>
                  <CardDescription className="text-blue-800 font-bold">Professional Skating Coach</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-blue-900 to-blue-700 p-4 rounded-lg border-2 border-amber-400">
                  <p className="text-amber-300 text-3xl font-bold">9+</p>
                  <p className="text-amber-50 text-sm font-semibold">Years Experience</p>
                </div>
                <div className="bg-gradient-to-br from-blue-900 to-blue-700 p-4 rounded-lg border-2 border-amber-400">
                  <p className="text-amber-300 text-3xl font-bold">300+</p>
                  <p className="text-amber-50 text-sm font-semibold">Students Trained</p>
                </div>
                <div className="bg-gradient-to-br from-blue-900 to-blue-700 p-4 rounded-lg border-2 border-amber-400">
                  <p className="text-amber-300 text-3xl font-bold">🏆</p>
                  <p className="text-amber-50 text-sm font-semibold">Certified Expert</p>
                </div>
              </div>
              <p className="text-blue-900 font-semibold">
                With over 9 years of professional experience in roller skating, Coach Rohan Kalle has trained more than 300 students of all skill levels. His passion for the sport and dedication to student success makes him the perfect mentor for your skating journey.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-blue-900 text-center mb-12 tracking-wide">STUDENT GALLERY</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['/vintage-skating-1.jpg', '/vintage-skating-2.jpg', '/vintage-skating-3.jpg', '/vintage-skating-4.jpg'].map((img, i) => (
              <div key={i} className="relative overflow-hidden group cursor-pointer h-64 rounded-lg border-4 border-blue-900 shadow-lg">
                <Image
                  src={img}
                  alt={`Skating moment ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end">
                  <p className="text-amber-100 font-bold p-4 text-lg">Skating in Action</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-4xl font-bold text-blue-900 text-center mb-4 tracking-wide">START YOUR SKATING JOURNEY</h3>
          <p className="text-blue-800 text-center mb-8 font-semibold">Fill out the form to register for our skating academy</p>

          {submitted && (
            <div className="bg-green-100 border-2 border-green-600 rounded-lg p-4 mb-6 flex items-center gap-3">
              <CheckCircle2 className="text-green-600" size={24} />
              <p className="text-green-700 font-semibold">Thanks for registering! We&apos;ll contact you soon.</p>
            </div>
          )}

          <Card className="bg-amber-50 border-4 border-blue-900 shadow-lg">
            <CardContent className="pt-6">
              <form onSubmit={handleRegister} className="space-y-6">
                <FieldGroup>
                  <Field>
                    <FieldLabel className="text-blue-900 font-semibold">Full Name</FieldLabel>
                    <Input
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-white border-2 border-blue-900 text-blue-900 placeholder:text-blue-400"
                    />
                  </Field>
                </FieldGroup>

                <FieldGroup>
                  <Field>
                    <FieldLabel className="text-blue-900 font-semibold">Email Address</FieldLabel>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-white border-2 border-blue-900 text-blue-900 placeholder:text-blue-400"
                    />
                  </Field>
                </FieldGroup>

                <FieldGroup>
                  <Field>
                    <FieldLabel className="text-blue-900 font-semibold">Age</FieldLabel>
                    <Input
                      type="number"
                      placeholder="Your age"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      required
                      className="bg-white border-2 border-blue-900 text-blue-900 placeholder:text-blue-400"
                    />
                  </Field>
                </FieldGroup>

                <FieldGroup>
                  <Field>
                    <FieldLabel className="text-blue-900 font-semibold">Phone Number</FieldLabel>
                    <Input
                      type="tel"
                      placeholder="Your contact number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="bg-white border-2 border-blue-900 text-blue-900 placeholder:text-blue-400"
                    />
                  </Field>
                </FieldGroup>

                <Button
                  type="submit"
                  disabled={registering}
                  className="w-full bg-gradient-to-r from-blue-900 to-amber-700 hover:from-blue-800 hover:to-amber-600 text-amber-50 font-bold text-lg"
                >
                  {registering ? 'Registering...' : 'Register Now'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-amber-900">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-amber-100 text-center mb-12 tracking-wide">GET IN TOUCH</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-amber-50 border-4 border-amber-400 text-center shadow-lg">
              <CardContent className="pt-6">
                <Phone className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <p className="text-blue-900 font-bold mb-2 text-lg">CALL US</p>
                <a href="tel:+918374691285" className="text-blue-900 hover:text-amber-600 transition font-bold text-lg">
                  8374691285
                </a>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 border-4 border-amber-400 text-center shadow-lg">
              <CardContent className="pt-6">
                <Mail className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <p className="text-blue-900 font-bold mb-2 text-lg">EMAIL</p>
                <a href="mailto:firstride@gmail.com" className="text-blue-900 hover:text-amber-600 transition text-sm break-all font-semibold">
                  firstride@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 border-4 border-amber-400 text-center shadow-lg">
              <CardContent className="pt-6">
                <Instagram className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <p className="text-blue-900 font-bold mb-2 text-lg">FOLLOW US</p>
                <a
                  href="https://instagram.com/first_ride_skating_academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-900 hover:text-amber-600 transition font-bold"
                >
                  @first_ride_skating_academy
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-amber-900 border-t-4 border-amber-400 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-amber-100 font-bold">
            © 2024 First Ride Skating Academy. Keep Rolling, Keep Growing!
          </p>
          <p className="text-amber-200 text-sm mt-2 font-semibold">Coached by Rohan Kalle | 9+ Years of Excellence</p>
        </div>
      </footer>
    </main>
  );
}
