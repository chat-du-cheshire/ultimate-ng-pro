import { ToMbPipe } from './to-mb.pipe';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component} from '@angular/core';

describe('ToMbPipe', () => {
  describe('ToMbPipe isolated test', () => {
    it('create an instance', () => {
      const pipe = new ToMbPipe();
      expect(pipe.transform(123456789)).toEqual('117.74MB');
      expect(pipe.transform(987654321)).toEqual('941.90MB');

      expect(pipe.transform(123456789, 'Megabytes')).toEqual('117.74Megabytes');
      expect(pipe.transform(987654321, 'Mbytes')).toEqual('941.90Mbytes');
    });
  });

  describe('ToMbPipe shallow test', () => {

    @Component({
      template: `Size: {{size | toMb : suffix}}`
    })
    class TestComponent {
      size = 123456789;
      suffix: string;
    }

    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let el: HTMLElement;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent, ToMbPipe]
      });

      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
      el = fixture.nativeElement;
    });

    it('should convert bytes to megabytes', () => {
      fixture.detectChanges();
      expect(el.textContent).toContain('Size: 117.74MB');
      component.size = 1029281;
      fixture.detectChanges();
      expect(el.textContent).toContain('Size: 0.98MB');
    });

    it('should use the default extension when not supplied', () => {
      fixture.detectChanges();
      expect(el.textContent).toContain('Size: 117.74MB');
    });

    it('should override the extension when supplied', () => {
      component.suffix = 'myExt';
      fixture.detectChanges();
      expect(el.textContent).toContain('Size: 117.74myExt');
    });
  });
});
