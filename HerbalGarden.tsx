import React, { useState } from 'react';
import PlantDetail from './PlantDetail';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const HerbalGarden = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-herb-50 to-herb-100">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-herb-800 mb-2">AYUSH Herbal Garden</h1>
          <p className="text-lg text-herb-700">Explore the healing power of Ayurvedic plants</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {/* Tulsi Plant Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
            <div className="relative h-64 cursor-pointer" onClick={() => setIsDialogOpen(true)}>
              <img 
                src="/lovable-uploads/5bd1bad7-9311-48e6-abb3-86e3f5c6457a.png" 
                alt="Tulsi Plant" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-herb-800 to-transparent p-4">
                <h2 className="text-white text-xl font-bold">Tulsi (Holy Basil)</h2>
              </div>
            </div>
            <div className="p-4">
              <p className="text-herb-800 mb-4">Tulsi, also known as Holy Basil, is revered in Ayurveda for its healing properties.</p>
              <Button 
                onClick={() => setIsDialogOpen(true)}
                className="w-full bg-herb-600 hover:bg-herb-700 text-white"
              >
                Explore Tulsi
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-5xl w-[90vw] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl text-herb-800">Tulsi (Holy Basil)</DialogTitle>
          </DialogHeader>
          <PlantDetail />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HerbalGarden;
