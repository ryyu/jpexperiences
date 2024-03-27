'use client'

import AboutUs from "@/components/AboutUs";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Nav from "@/components/Nav";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import DatePickerWithRange from "@/components/DatePickerWithRange";
import { Textarea } from "@/components/ui/textarea";

import config from '../../next.config.mjs';

export default function Home() {
  const basePath = config.basePath;
  return (
    <>
      <section className="h-screen relative">
      {/* Maybe no nav is necessary */}
      <Nav></Nav>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Your guide to high-quality {' '}
            <span className="text-blue-600">outdoor experiences</span> {' '}
            In Japan.
          </h1>
          <p className="mt-6 text-lg text-slate-200 max-w-prose text-muted-foreground">Welcome to JP Experiences. Every experience on our platform is curated by our experienced guides to offer a one of a kind journey.</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href='/experiences' className={buttonVariants()}>Browse Experiences</Link>
            <Button className="text-slate-200" variant='ghost'>Our quality promise &rarr;</Button>
          </div>
        </div>
        <Image
            src={`/IMG_1807.JPG`}
            alt="bg image"
            quality={100}
            fill
            className="-z-10"
            style={{
              objectFit: "cover"
            }}
            ></Image>
      </MaxWidthWrapper>
      </section>

      <section className="bg-slate-900 h-screen" id={"#AboutUs"}>
        <MaxWidthWrapper>
          <AboutUs></AboutUs>
        </MaxWidthWrapper>
      </section>
      <section className="bg-gradient-to-br from-blue-600 to-blue-100 h-screen">
        <MaxWidthWrapper>
          <div id={'Contact'} className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>Book your next adventure</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Name" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" placeholder="Email" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="dates">Dates</Label>
                      <DatePickerWithRange />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="interests">Tell us about yourself</Label>
                      <Textarea placeholder="What are your interests" />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button>Confirm</Button>
              </CardFooter>
            </Card>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
