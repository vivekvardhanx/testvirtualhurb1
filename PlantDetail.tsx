
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Play, Pause, Download, Share, MessageSquare } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PlantDetail = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const tulsiImages = [
    {
      src: "/lovable-uploads/45378c30-0865-41b7-8569-c11a3ed9265f.png",
      alt: "Tulsi Plant Close-up"
    },
    {
      src: "/lovable-uploads/bcdbe650-3074-4723-ab16-a93d7b57a483.png",
      alt: "Tulsi Leaves Detail"
    },
    {
      src: "/lovable-uploads/7f1e0cc5-b3b0-48d3-b852-2342a9b9fd92.png",
      alt: "Tulsi Flowering Branch"
    },
    {
      src: "/lovable-uploads/5f99906b-04fd-4c0c-809e-f8ee08a677d1.png",
      alt: "Tulsi Plant in Sunlight"
    },
    {
      src: "/lovable-uploads/8159332b-f7a6-41de-aeff-bc5f3c7396e8.png",
      alt: "Tulsi Flower Close-up"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left Column */}
      <div className="space-y-6">
        {/* 3D Model Viewer */}
        <Card className="p-4 h-[400px]">
          <div className="sketchfab-embed-wrapper h-full"> 
            <iframe 
              title="Tulsi" 
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; fullscreen; xr-spatial-tracking" 
              className="w-full h-full rounded-lg"
              src="https://sketchfab.com/models/693ddb22be0a4814838b1ee1c20502ec/embed?autostart=1"
            />
            <p className="text-xs text-gray-600 mt-2"> 
              <a href="https://sketchfab.com/3d-models/tulsi-693ddb22be0a4814838b1ee1c20502ec" target="_blank" rel="nofollow" className="font-bold text-blue-500">Tulsi</a> by
              <a href="https://sketchfab.com/2205810.eshan.sdcce" target="_blank" rel="nofollow" className="font-bold text-blue-500"> 2205810.eshan.sdcce </a> on
              <a href="https://sketchfab.com" target="_blank" rel="nofollow" className="font-bold text-blue-500"> Sketchfab</a>
            </p>
          </div>
        </Card>

        {/* YouTube Video */}
        <Card className="p-4">
          <div className="aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/HL6XdPLgoGA"
              title="Tulsi Plant Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Card>

        {/* Image Carousel */}
        <Card className="p-4">
          <Carousel className="w-full">
            <CarouselContent>
              {tulsiImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Card>
      </div>

      {/* Right Column */}
      <div className="space-y-6">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold text-herb-800 mb-3">Tulsi (Holy Basil)</h2>
          <p className="text-herb-600 mb-6">
            Tulsi is a sacred plant in Hinduism and is renowned for its powerful medicinal properties in Ayurvedic medicine.
          </p>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <h4 className="font-semibold text-herb-700">Common Names</h4>
              <p className="text-herb-600">Holy Basil, Sacred Basil, Tulasi</p>
            </div>
            <div>
              <h4 className="font-semibold text-herb-700">Botanical Name</h4>
              <p className="text-herb-600">Ocimum sanctum</p>
            </div>
            <div>
              <h4 className="font-semibold text-herb-700">Region</h4>
              <p className="text-herb-600">India</p>
            </div>
            <div>
              <h4 className="font-semibold text-herb-700">Type</h4>
              <p className="text-herb-600">Herb</p>
            </div>
            <div>
              <h4 className="font-semibold text-herb-700">Habitat</h4>
              <p className="text-herb-600">Gardens, Households</p>
            </div>
            <div>
              <h4 className="font-semibold text-herb-700">Medicinal Uses</h4>
              <p className="text-herb-600">Adaptogenic, anti-inflammatory, antimicrobial, immunomodulatory</p>
            </div>
            <div>
              <h4 className="font-semibold text-herb-700">Methods of Cultivation</h4>
              <p className="text-herb-600">Seeds, stem cuttings, well-drained soil, full sunlight</p>
            </div>
          </div>
        </Card>

        {/* Audio Player */}
        <Card className="p-4">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsPlaying(!isPlaying)}
              className="h-10 w-10"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            <div className="flex-1 h-2 bg-herb-100 rounded-full">
              <div className="w-1/3 h-full bg-herb-500 rounded-full"/>
            </div>
          </div>
        </Card>

        {/* Notes Section */}
        <Card className="p-4">
          <Textarea 
            placeholder="Add your notes about this plant..." 
            className="mb-4 min-h-[100px]"
          />
          <div className="flex gap-3">
            <Button variant="outline" className="flex-1">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
            <Button variant="outline" className="flex-1">
              <Share className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button variant="outline" className="flex-1">
              <MessageSquare className="mr-2 h-4 w-4" />
              Comment
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PlantDetail;
