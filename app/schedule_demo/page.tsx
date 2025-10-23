"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function DemoScheduler() {
  const [isMinimized, setIsMinimized] = React.useState(false);
  const [showDialog, setShowDialog] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (!isMinimized) {
        setShowDialog(true);
      }
    }, 60000); // 1 minute

    return () => clearTimeout(timer);
  }, [isMinimized]);

  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Schedule a Demo</DialogTitle>
          <DialogDescription>
            See Platy.Studio in action. Choose your preferred date and time for
            a personalized demo.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" />
          </div>
          <div className="grid gap-2">
            <Label>Preferred Date</Label>
            <Input type="date" />
          </div>
          <div className="grid gap-2">
            <Label>Preferred Time</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="9">9:00 AM</SelectItem>
                <SelectItem value="10">10:00 AM</SelectItem>
                <SelectItem value="11">11:00 AM</SelectItem>
                <SelectItem value="12">12:00 PM</SelectItem>
                <SelectItem value="13">1:00 PM</SelectItem>
                <SelectItem value="14">2:00 PM</SelectItem>
                <SelectItem value="15">3:00 PM</SelectItem>
                <SelectItem value="16">4:00 PM</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => {
              setShowDialog(false);
              setIsMinimized(true);
            }}
          >
            Minimize
          </Button>
          <Button type="submit">Schedule Call</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
