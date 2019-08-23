
(function () {
	var uStatePaths = [
		{ id: "C8", n: "8) Villa Hermosa", d: "M465.23,414.71,467.69,412.67,470.7,413.32,478.43,417.14,481.85,414.9,486.67,415.51,489.07,420.34,494.1,422.07,497.89,424.95,501.47,423.65,506.11,423.65,512.13,421.33,517.12,422.96,519.41,425.52,527.5,426.35,520.35,423.2,516.22,419.11,520.35,417.18,522.46,415.32,527.32,411.46,526.36,406.51,526.99,401.87,524.05,400.36,523.75,398.89,520.84,398.57,516.18,394.06,515.7,390.78,509.91,382.7,509.69,380.13,498.55,379.95,495.64,382.52,491.76,384.58,488.08,388.58,483.9,388.18,479.8,388.98,477.2,385.65,475.13,384.14,474.63,381.67,473.19,381.84,471.9,379.8,472.41,376.7,471.37,373.81,461.99,366.64,460.94,363.95,457.53,359.72,461.29,355.05,460.54,352.77,461.82,348.93,468.99,342.58,469.69,339.25,472.21,337.75,477.18,337.49,477.74,336.53,470.01,330.14,469.77,326.81,468.93,322.81,465.43,319.83,464.61,315.87,463.08,313.67,463.39,310.92,465.27,309.65,467.07,309.85,471.2,307.44,474.05,304.77,470.23,304.77,468.09,305.68,465.39,303.67,459.42,303.19,455.43,302.08,453.67,300.81,454.01,298.25,451.29,296.15,450.75,291.02,448.85,288.92,448.85,284.89,439.09,283.75,434.31,280.89,429.66,281.66,428.53,285.78,423.29,285.78,420.08,283.47,414.34,280.29,409.58,279.73,403.29,284.01,394.92,287.81,393.29,288.04,390.98,287.49,388.99,286.07,384.12,283.78,383.21,285.98,367.52,309.21,394.18,327.94,393.09,331.25,394.04,333.04,394.04,334.57,394.45,335.42,394.45,336.67,398.32,337.52,396.38,343.19,391.23,351.63,388.9,353.09,396.88,362.11,399.02,366.25,405.21,367.63,409.97,368.14,417.87,368.14,422.88,371.23,425.41,371.76,429.39,378.38,436.61,379.75,438.57,382.68,437.71,385.38,442.19,392.39,448.11,394.27,451.25,396.37,455.39,403.07,458.2,403.12,463.13,409.93,465.23,414.71z" },
		{ id: "C9", n: "9) Buenos Aires", d: "M391.77,476.13,389.47,473.92,385.38,472.95,382.26,471.67,376.18,465.95,368.76,459.96,367.92,457.14,369.64,455.4,372.25,455.92,373.84,453.87,374.36,449.59,374.62,443.05,376.5,441.15,381.75,441.15,388.29,441.67,389.92,433.76,392.97,437.66,401.07,435.74,402.83,436.89,405.18,436.89,408.08,440.56,410.06,432.35,412.9,426.89,418.23,425.75,421.8,427.59,420.99,434.52,420.99,442.19,425.68,442.19,427.09,444.06,437.81,444.06,443.3,445.85,447.7,445.85,449.53,447.26,452.96,447.26,456.22,445.63,459.02,447.64,461.32,447.48,461.64,445.53,459.21,443.21,458.55,441.31,459.22,438.63,461.98,435.36,463.2,431.86,467.74,435.69,470.55,435.69,473.69,433.59,476.99,434.29,481.93,431.04,485.58,431.04,488.84,433,490.57,432.64,492.14,433.62,494.44,432.91,494.78,435.94,496.38,437.59,500.32,436.6,501.63,434.91,504.04,432.92,505.82,433.92,507.05,435.58,508.48,435.88,509.88,433.69,512.51,434.1,513.64,435.93,514.73,435.56,515.17,433.3,514.61,430.53,513.42,427.62,515.6,426.3,520.48,426.99,527.5,426.35,519.41,425.52,517.12,422.96,512.13,421.33,506.11,423.65,501.47,423.65,497.89,424.95,494.1,422.07,489.07,420.34,486.67,415.51,481.85,414.9,478.43,417.14,470.7,413.32,467.69,412.67,465.23,414.71,463.13,409.93,458.2,403.12,455.39,403.07,451.25,396.37,448.11,394.27,442.19,392.39,437.71,385.38,438.57,382.68,436.61,379.75,429.39,378.38,425.41,371.76,422.88,371.23,417.87,368.14,409.97,368.14,405.21,367.63,399.02,366.25,396.88,362.11,388.9,353.09,387.5,357.35,386.23,356.12,381.68,360.6,380.6,360.13,378.69,364.13,373.75,367.24,368.51,371.69,366.04,369.8,361.83,369.47,356.94,372.81,352.76,377.67,357.9,385.87,357.6,393.87,353.68,399.17,353.05,402.85,349.09,407.1,345.18,405.14,338.55,409.34,346.12,419.1,341.84,425.25,341.46,432.54,344.55,435.05,347.1,438,349.63,442.29,346.87,446.8,347.8,449.23,348.31,452.94,345.9,465.17,342.26,468.62,343.91,473.66,343.64,476.2,346.18,477.91,349.65,477.91,351.03,479.49,351.21,483.46,356.85,488.96,380.32,494.06,382.23,492.68,382.23,489.93,380.05,486.28,390.22,479.03,391.77,476.13z" },
		{ id: "C10", n: "10) La Candelaria", d: "M357.6,393.87,357.9,385.87,352.76,377.67,356.94,372.81,361.83,369.47,366.04,369.8,368.51,371.69,373.75,367.24,378.69,364.13,380.6,360.13,381.68,360.6,386.23,356.12,387.5,357.35,388.9,353.09,391.23,351.63,396.38,343.19,398.32,337.52,394.45,336.67,394.45,335.42,394.04,334.57,394.04,333.04,393.09,331.25,394.18,327.94,367.52,309.21,383.21,285.98,384.12,283.78,388.99,286.07,383.1,280.73,378.47,280.33,381.51,276.68,358.3,272.83,352.22,273.32,317.62,267.69,315.97,275.88,310.72,288.83,281.81,341.46,281.08,344.47,281.9,347.85,301.5,402.87,302.25,405.92,302.69,410.68,302.97,418.93,309.81,421.74,321.2,430.23,328.8,435.75,329.87,440.87,332.85,440.87,333.73,443.84,336.51,443.84,340.64,445,340.64,447.36,343.22,449.23,347.8,449.23,346.87,446.8,349.63,442.29,347.1,438,344.55,435.05,341.46,432.54,341.84,425.25,346.12,419.1,338.55,409.34,345.18,405.14,349.09,407.1,353.05,402.85,353.68,399.17,357.6,393.87z" },
		{ id: "C4", n: "4) Aranjuez", d: "M340.71,180.48,337.11,183.31,335.76,184.46,334.98,185.98,334.55,187.61,334.25,196.19,333.91,198.29,333.43,199.97,317.62,267.69,352.22,273.32,358.3,272.83,381.51,276.68,378.47,280.33,383.1,280.73,388.99,286.07,390.68,280.99,390.96,276.32,392.07,264.2,395.2,243.26,401.88,206.25,403.48,198.22,403.69,193.56,402.64,190.87,403.34,176.09,404.38,174.06,402.01,170.93,397.48,170.41,389.6,161.91,388.82,161.07,381.44,160.44,378.08,161.29,371.86,159.71,368.96,153.07,365.15,151.35,362.44,151.97,357,149.45,356.76,150.48,355.85,152.54,353.89,154.82,351.05,157.1,348.59,159.68,347.35,162.09,346.98,164.68,345.94,171.94,344.97,175.64,344.08,177.25,342.55,178.83,340.71,180.48z" },
		{ id: "C2", n: "2) Santa Cruz", d: "M365.15,151.35,368.96,153.07,371.86,159.71,378.08,161.29,381.44,160.44,388.82,161.07,389.6,161.91,393.45,159.52,400.65,157.78,404.78,150.86,416.46,148.82,417.34,146.34,414.87,145.52,413.63,141.34,416.21,136.96,418.03,137,420.41,134.99,418.75,133.08,413.8,131.59,411.82,127.19,421.15,109.43,421.97,103.2,420.84,100.36,423.2,96.05,422.91,92.83,424.8,92.83,424.97,93.98,428.79,96.32,431.77,92.58,441.2,94.65,442.25,91.8,439.23,91.68,435.16,87.5,434.16,85.85,432.66,86.84,428.99,86.76,424.84,84.58,420.97,84.19,418.04,80.76,415.5,81.8,408.4,79.63,400.53,77.56,394.3,75.18,387.52,68.54,385.9,66.73,385.4,65.69,384.72,66.56,383.49,68.56,383.36,70.53,384.5,74.58,384.25,83.79,385.29,91.91,385.33,96.81,383.98,101.56,380.14,110.41,379.08,114.91,374.9,122.8,373.53,125.97,372.76,129.95,371.78,132.15,369.57,134.16,366.77,136.25,363.01,138.18,361.2,139.1,359.85,140.43,358.86,142.11,358.17,144.44,357,149.45,362.44,151.97,365.15,151.35z" },
		{ id: "C3", n: "3) Manrique", d: "M404.38,174.06,403.34,176.09,402.64,190.87,403.69,193.56,403.48,198.22,401.88,206.25,395.2,243.26,392.07,264.2,390.96,276.32,390.68,280.99,388.99,286.07,390.98,287.49,393.29,288.04,394.92,287.81,403.29,284.01,409.58,279.73,414.34,280.29,420.08,283.47,423.29,285.78,428.53,285.78,429.66,281.66,434.31,280.89,439.09,283.75,448.85,284.89,454,283.65,455.85,282.67,459.84,283.48,463.75,282.44,466.06,275.76,464.94,271.31,465.22,266.48,466.33,263.17,469.19,261.7,471.94,261.56,474.23,259.67,477.39,260.72,482.41,260.72,480.34,258.35,479.72,255.37,477.11,252.88,476.77,250.71,484.99,243.05,479,239.2,476.82,236.58,474.14,232.22,476.29,226.48,482.58,222.61,482.16,221.84,477.52,219.72,476.92,217.57,478.83,214.49,477.18,212.12,476.54,208.72,474.74,206.49,474.74,204.4,471.32,203.55,466.72,204.93,463.76,204.58,464.87,199.48,464.18,196.61,467.88,191.64,472.73,191.82,473.51,184.81,476.38,179.89,471.99,176.92,470.61,174.43,461.23,174.88,456.94,173.06,448.59,173.06,443.58,176.22,440.02,175.3,429.3,179.82,424.62,177.87,415.08,179.23,404.38,174.06z" },
		{ id: "C1", n: "1) Popular", d: "M471.99,176.92,476.38,179.89,479.13,176.04,478.6,162.56,475.5,160.78,478.3,157.09,477.65,154.65,475.52,152.22,478.25,149.34,476.87,144.31,479.15,140.65,477.2,137.74,473.56,136.11,476.41,130.68,478.87,128.08,478.37,120.91,474.71,117.16,469.52,107.22,466.97,107.92,463.17,102.68,459.46,99.62,453.62,97.77,451.43,95.66,449.87,93.16,446.08,94.2,442.25,91.8,441.2,94.65,431.77,92.58,428.79,96.32,424.97,93.98,424.8,92.83,422.91,92.83,423.2,96.05,420.84,100.36,421.97,103.2,421.15,109.43,411.82,127.19,413.8,131.59,418.75,133.08,420.41,134.99,418.03,137,416.21,136.96,413.63,141.34,414.87,145.52,417.34,146.34,416.46,148.82,404.78,150.86,400.65,157.78,393.45,159.52,389.6,161.91,397.48,170.41,402.01,170.93,404.38,174.06,415.08,179.23,424.62,177.87,429.3,179.82,440.02,175.3,443.58,176.22,448.59,173.06,456.94,173.06,461.23,174.88,470.61,174.43,471.99,176.92z" },
		{ id: "C14", n: "14) El Poblado", d: "M351.21,483.46,351.03,479.49,349.65,477.91,346.18,477.91,343.64,476.2,343.91,473.66,342.26,468.62,345.9,465.17,348.31,452.94,347.8,449.23,343.22,449.23,340.64,447.36,340.64,445,336.51,443.84,333.73,443.84,332.85,440.87,329.87,440.87,328.8,435.75,321.2,430.23,309.81,421.74,302.97,418.93,283.7,559.52,274.62,587.68,269.78,605.61,268.3,609.85,270.61,611.96,272.75,611.96,279.78,617.45,281.77,625.25,282.18,629.29,285.11,632.23,295.71,638.96,299.89,638.96,302.6,642.34,314.42,649.94,320.14,651.68,325.66,650.89,328.61,652.98,331.17,652.74,335.47,656.41,338.05,660.26,342.58,662.11,344.82,664.12,348.98,663.11,354.24,665.94,359.45,663.87,364.74,663.87,370.3,665.06,371.82,662.37,373.57,660.67,376.02,659.5,376.54,656.89,375.95,653.52,375.95,650.71,377.08,648.72,376.06,645.94,375.48,642.42,377.11,640.64,380.33,639.88,382.6,641.75,384.91,642.47,391.2,642.94,391.94,640.28,390.92,637.31,391.33,633.07,388.32,632.26,385.41,630.56,386.05,621.79,388.54,623.08,392.04,619.03,395.92,616.72,397.39,614.83,399.8,612.87,400.9,610.58,399.06,608.34,398.66,605.4,397.72,602.44,396.78,600.16,398.24,597.6,397.17,595.28,395.63,592.78,397.33,590.66,397.87,587.82,398.85,584.53,400.65,581.77,401.11,577.16,406.06,573.14,404.99,570.12,406.47,567.15,406.77,563.53,408.39,560.64,408.39,558.42,407.64,556.44,408.91,554.83,410.13,550.89,412.45,549.86,413.95,548.4,413.75,546.91,412.62,544.87,413.09,541.73,415.7,540.34,419.5,539.7,421.81,537.6,422.65,535.32,422.65,531.03,422.96,525.84,424.25,522.61,425.69,516.8,427.4,514.71,426.69,511.18,427.44,508.69,425.13,506.41,427.31,503.51,427.97,500.56,428.69,493.33,422.33,496.81,416.3,497.36,409.69,496.62,409.95,492.05,404.34,487.09,399.83,482.59,396.56,480.72,391.77,476.13,390.22,479.03,380.05,486.28,382.23,489.93,382.23,492.68,380.32,494.06,356.85,488.96,351.21,483.46z" },
		{ id: "C11", n: "11) Laureles-Estadio", d: "M266.6,287.89,260.29,284.32,258.61,279.75,254.23,276.09,252.98,271.3,250.88,268.87,247.35,266.07,241.48,262.81,235.15,258.43,227.68,250.71,223.4,246.01,221.19,241.36,218.37,238.25,214.53,241.44,198.86,311.27,196.86,315.85,201.89,314.02,203.28,314.31,208.16,313.22,206.24,334.81,193.48,335.12,188.4,333.07,181.78,332.84,179.66,365.77,161.38,361.46,158.71,364.31,156.91,371.63,141.92,369.05,134.15,368.71,130.13,372.73,123.64,372.73,119.08,373.85,111.37,373.85,116.42,374.93,117.86,375.67,120.39,375.08,121.59,375.57,123.52,377.53,124.89,377.91,125.84,377.73,127.31,376.81,128.78,377.29,130.36,378.24,137.22,383.17,140.07,390.59,152.95,391.18,159.48,391.07,178.14,390.76,192.65,390,190.76,385.11,290.98,381.7,278.93,347.85,278.28,344.45,278.83,341.46,305.93,292.15,295.64,294.96,291.27,295.58,284,295.28,278.32,293.98,272.97,292.54,266.6,287.89z" },
		{ id: "C12", n: "12) La América", d: "M183.12,288.37,175.5,291.71,172.32,292.22,161.09,297.18,157.42,296.97,152.2,298.24,145.32,298.9,142.38,298.55,135.63,308.74,132.83,307.39,130.38,309.17,132.24,310.57,129.37,312.23,122,318.01,113.57,319.51,109.62,324.69,109.45,326.31,110.98,327.32,113.02,326.92,116.45,322.3,120.22,321.87,122,323.52,123.71,326.39,128.58,329.44,128.57,332.36,120.3,339.56,119.48,344.72,122.26,347.68,116.37,354.35,119.85,357.04,121.78,362.63,123.04,368.88,118.62,368.88,114.92,372.84,111.37,373.85,119.08,373.85,123.64,372.73,130.13,372.73,134.15,368.71,141.92,369.05,156.91,371.63,158.71,364.31,161.38,361.46,179.66,365.77,181.78,332.84,188.4,333.07,193.48,335.12,206.24,334.81,208.16,313.22,203.28,314.31,201.89,314.02,196.86,315.85,198.86,311.27,214.53,241.44,212.61,236.52,209.13,237.08,209.04,238.47,206.38,238.18,202.87,239.22,201.16,245.88,198.86,244.28,197.48,248.48,196.28,249.38,195.58,246.26,194.25,244.23,190.69,242.42,189.76,245.57,192.2,246.41,190.87,247.14,191.09,251.1,187.74,249.9,182.35,249.46,176.59,252.66,172.82,253.14,174.34,255.04,171.12,258.73,171.12,261.68,166.22,258.02,168.88,264.61,171.26,267.83,169.79,272.29,171.17,274.38,170.49,279.31,182.72,279.12,185.3,274.36,187.58,275.82,189.97,294.3,183.12,288.37z" },
		{ id: "C13", n: "13) San Javier", d: "M87.76,299.6,86.94,299.82,80.07,295.13,78.2,294.88,77.02,294.26,73.89,290.66,71.22,286.71,70.9,284.18,69.41,282.94,68,281.62,67.14,279.75,66.8,277.84,65.62,274.83,66.6,273.62,65.85,273.07,64.64,273.17,63.15,273.83,61.76,273.65,58.83,272.62,57.53,272.28,56.18,272.49,55.7,273.59,57.15,274.59,61.11,277.05,61.54,278.19,61.13,279.43,58.96,282.6,57.9,285.35,58.48,287.25,58.28,288.63,53.82,292.94,48.5,296.89,48.5,297.89,53.66,300.73,54.24,303.05,56.98,304.77,60.36,306.05,62.4,308.19,64.12,312.74,63.32,313.92,62.01,313.75,60.65,312.79,57,310.41,55.13,310.58,52.21,311,50.73,312.93,50.45,315.89,50.75,317.85,50.78,320.67,51.55,322.92,54.01,325.21,56.76,325.21,60.14,326.11,60.84,329.19,60.61,331.35,58.23,331.73,56.43,333.9,53.63,334.87,49.58,333.28,53.42,339.3,58.77,342.69,55.12,342.69,50.87,340.32,52.15,343.71,54.55,347.48,55.95,350.2,57.88,351.37,60.48,351.72,63.62,351.72,64.07,353.63,64.87,354.67,66.45,355.67,68.79,355.91,70.7,355.11,71.75,353.71,71.96,351.88,73,351.33,76.5,351.91,80.58,352.87,84.52,353.54,87.59,353.54,87.86,354.62,86.98,356.17,88.02,357.53,90.68,358.96,92.15,360.88,90.11,363.73,91.83,364.84,91.83,365.74,88.34,367.56,89.75,369.64,90,371.74,91.32,371.74,94.17,369.96,95.67,371.42,95,372.91,95,374.16,96.94,375.84,98.49,376.04,99.7,375.8,101.67,373.73,102.09,371.84,103.64,371.64,104.75,372.28,107.54,373.28,111.37,373.85,114.92,372.84,118.62,368.88,123.04,368.88,121.78,362.63,119.85,357.04,116.37,354.35,122.26,347.68,119.48,344.72,120.3,339.56,128.57,332.36,128.58,329.44,123.71,326.39,122,323.52,120.22,321.87,116.45,322.3,113.02,326.92,110.98,327.32,109.45,326.31,109.62,324.69,113.57,319.51,122,318.01,129.37,312.23,132.24,310.57,130.38,309.17,132.83,307.39,135.63,308.74,142.38,298.55,145.32,298.9,152.2,298.24,157.42,296.97,161.09,297.18,172.32,292.22,175.5,291.71,183.12,288.37,189.97,294.3,187.58,275.82,185.3,274.36,182.72,279.12,170.49,279.31,171.17,274.38,169.79,272.29,171.26,267.83,168.88,264.61,166.22,258.02,171.12,261.68,171.12,258.73,174.34,255.04,172.82,253.14,176.59,252.66,182.35,249.46,187.74,249.9,191.09,251.1,190.87,247.14,192.2,246.41,189.76,245.57,190.69,242.42,194.25,244.23,195.58,246.26,196.28,249.38,197.48,248.48,198.86,244.28,201.16,245.88,202.87,239.22,206.38,238.18,209.04,238.47,209.13,237.08,212.61,236.52,214.53,241.44,218.37,238.25,213,233.68,206.94,233.68,203.33,230.15,197.49,228.99,195.03,225.43,188.61,225.01,178.28,219.76,176.47,222.89,174.44,222.89,164.61,216.76,160.9,217.78,157.05,216.4,156.48,227.81,152.97,235.64,143.82,234.45,131.87,241.73,122.45,240.76,120.46,242.39,116.42,242.78,118.19,244.1,119.22,246.17,116.95,246.91,116.95,249,118.59,253.2,121.54,258.49,123.12,262.69,125.93,265.61,126.92,268.06,126.92,273.02,127.6,273.87,127.94,275.99,128.66,277.62,128.66,279.78,127.88,280.44,127.88,281.2,128.51,281.79,128.93,282.66,127.83,285.01,126.77,289.44,125.75,290.65,124.41,290.86,123.61,290.07,122.49,287.35,119.58,282.25,118.52,281.03,117.56,281.28,116.41,281.77,115.46,281.39,114.97,280.7,114.84,278.94,112.81,278.47,112.54,276.91,111.82,276.16,110.54,276.55,108.9,276.84,107.09,275.81,106.23,274.63,104.82,273.08,103.13,274,101.64,274.73,97.77,274.95,96.76,276.35,95.74,278.04,93.6,278.71,89.27,276.26,88.56,276.89,88.87,278.02,88.54,278.51,87.63,278.61,85.56,278.45,85.05,278.64,85.35,279.44,88.16,282.69,88.6,284.11,88.21,287.37,87.74,288.79,88.18,289.56,90.22,292.26,90.22,293.28,88.55,295.93,87.76,299.6z" },
		{ id: "C15", n: "15) Guayabal", d: "M280.25,410.56,269.42,409.97,269.33,416.04,263.49,417.03,252.04,416.85,249.42,417.43,237.62,417.48,235.19,419.06,233.65,426.3,230.21,428.79,230.84,431.88,230.84,441.58,228.74,454.05,217.12,511.29,216.87,514.53,213.8,509.44,211.6,511.59,205.76,513.33,202.73,512,201.42,513.71,201.94,517,201.53,530.63,204.18,534.93,201.41,537.94,196.63,538.57,200.46,544.28,196.04,545.11,197.22,546.93,193.55,549.69,200.32,558.77,199.68,560.52,201.67,561.96,204.38,562.79,206.93,563.68,207.77,564.51,208.19,565.53,210.37,566.89,212.93,568.8,213.49,570.56,213.74,572.62,212.83,576.24,213.59,577.88,216.08,578.94,217.08,579.86,216.84,581.97,214.69,584.42,213.65,585.95,214.29,587.27,216.91,588.02,220.12,588.53,223.43,589.25,228.84,590.64,231.48,586.94,236.34,585.48,247.2,580.3,249.93,579.7,256.01,584.74,271.77,587.3,280.73,559.52,300,418.93,299.98,418.28,296.2,417.05,296.4,414.4,280.25,410.56z" },
		{ id: "C16", n: "16) Belén", d: "M149.09,439.62,148.2,441.36,150.38,443.76,148.95,445.83,145.47,445.83,142.71,444.37,141.04,447.56,143.02,448.68,143.02,449.79,140.79,449.79,140.03,451.16,142.87,453.6,140.98,457.93,137.71,455.13,137.13,458.47,134.93,458.91,132.72,456.53,120.92,458.37,118.53,457.8,115.27,456.47,110.65,457.33,111.03,459.6,112.88,461.7,114.01,463.29,115.88,465.22,118.38,465.6,120.11,468.67,122.44,470,126.98,469.77,129,471.5,131.35,470.95,134.04,469.82,136.28,469.64,137.72,470.87,138.06,473.37,139.69,475.02,145.51,474.78,148.75,477.92,149.26,479.44,150.66,480.94,149.83,483.79,151.94,485.75,154.79,486.63,155.05,489.45,153.94,491.55,155.72,493.25,155.72,497.96,154.7,499.39,153.77,500.94,152.19,502.57,151.98,503.91,152.88,504.79,155.44,506.04,162.22,512.42,162.22,514.63,163.06,515.79,164.65,516.7,162.92,517.82,157.84,520.68,157.18,521.2,156.93,522.16,157.88,523.35,163.88,526.95,165.23,527.75,165.55,528.97,164.08,530.57,161.4,532.75,159.45,531.45,157.66,531.14,154.99,531.67,151.65,531.45,147.04,532.93,145.19,533.22,147.57,534.54,151.84,534.95,154.42,536.47,157,539.4,159.31,540.29,161.49,541.89,163.91,546.84,164.96,547.46,166.16,546.8,168.17,543.59,170.61,543.12,172.85,543.7,174.17,544.67,174.01,546.7,177.35,551.19,177.9,552.41,177.69,554.36,177.97,555.88,179.31,556.93,181.13,556.1,182.52,556.1,183.41,557.15,183.68,558.47,185.45,558.09,187.12,557.14,188.94,557.78,191.79,557.98,195.69,557.67,198.18,558.93,199.68,560.52,200.32,558.77,193.55,549.69,197.22,546.93,196.04,545.11,200.46,544.28,196.63,538.57,201.41,537.94,204.18,534.93,201.53,530.63,201.94,517,201.42,513.71,202.73,512,205.76,513.33,211.6,511.59,213.8,509.44,216.87,514.53,217.12,511.29,228.74,454.05,230.84,441.58,230.84,431.88,230.21,428.79,233.65,426.3,235.19,419.06,237.62,417.48,249.42,417.43,252.04,416.85,263.49,417.03,269.33,416.04,269.42,409.97,280.25,410.56,296.4,414.4,296.2,417.05,299.98,418.28,299.72,410.68,299.27,405.92,298.52,402.87,290.98,381.7,190.76,385.11,192.65,390,178.14,390.76,159.48,391.07,152.95,391.18,140.07,390.59,137.22,383.17,130.36,378.24,130.01,380.94,128.78,382.91,128.78,384.15,130.86,384.65,132.65,385.79,133.99,386.77,135.7,388.63,135.95,389.54,135.81,390.25,135.3,390.69,134.54,390.84,133.82,390.52,132.68,389.72,131.01,389.49,129.64,390.21,127.97,388.87,125.21,388.87,121.96,387.59,118.14,387.59,115.5,385.57,113.11,382.74,112.6,379.88,108.96,377.84,107.6,377.84,105.98,377.03,102.95,376.81,100.91,376.81,99.96,377.64,99.77,378.65,102.62,378.91,105.67,379.8,107.28,380.78,108.43,382.47,108.43,384.23,107.69,386.06,106.79,388.7,105.93,391.59,104.39,393.17,102.06,393.76,98.36,393.33,96.24,394.66,93.25,395.06,92.19,396.51,92.82,397.7,94.81,397.27,97.59,397.92,99.8,398.68,102.47,398.95,105.33,398.57,108.41,398.32,110.3,398.94,114.77,401.93,116.75,401.69,118.37,402.89,121.12,404.04,124.17,403.76,126.07,404.71,125.5,407.13,123.3,409.48,122.91,411.52,121.04,413.58,121.23,414.54,122.06,415.62,121.9,417.29,124.27,418.75,126.1,419.24,129,419.55,130.62,419.83,129.9,420.56,128.07,420.84,126.3,421.33,122.14,421.71,120.18,422.76,119.41,423.67,120.1,424.76,122.1,425.57,124.04,426.76,125.01,428.33,123.35,429.46,121.46,431.16,122.16,434.05,122.91,434.9,126.11,434.62,127.8,435.95,128.03,437.6,130.37,437.99,134.37,436.76,135.75,437.62,137.69,436.5,137.89,435.3,138.76,433.65,140.81,432.25,143.76,431.9,144.96,427.4,146.9,426.83,147.87,427.78,148.48,428.58,149.06,430.73,149.22,433.47,148.92,436.72,151.76,436.72,152.81,438.67,151.78,440.41,149.09,439.62z" },
		{ id: "C7", n: "7) Robledo", d: "M85.76,204.51,88.47,206.2,88.99,208.95,91.9,211.46,93.72,211.97,96.44,211.74,93.75,222.43,96.87,224.87,100.31,228.42,104.06,231.12,105.44,231.73,107.3,231.73,107.91,233.78,106.95,239.56,105.72,242.83,105.15,243.92,105.15,244.54,105.8,244.88,107.7,244.73,110.36,244.14,113.04,243.71,114.78,243.07,116.42,242.78,120.46,242.39,122.45,240.76,131.87,241.73,143.82,234.45,152.97,235.64,156.48,227.81,157.05,216.4,160.9,217.78,164.61,216.76,174.44,222.89,176.47,222.89,178.28,219.76,188.61,225.01,195.03,225.43,197.49,228.99,203.33,230.15,206.94,233.68,213,233.68,218.37,238.25,221.19,241.36,223.4,246.01,227.68,250.71,235.15,258.43,241.48,262.81,247.35,266.07,250.88,268.87,252.98,271.3,254.23,276.09,258.61,279.75,260.29,284.32,266.6,287.89,272.97,292.54,284,295.28,291.27,295.58,295.64,294.96,305.93,292.15,307.75,288.83,313,275.88,314.75,267.28,304.06,265.8,294.55,260.78,295.37,255.48,298.94,247.79,282.01,235.08,281.86,230.67,286.68,224.81,287.32,221.69,286.83,219.44,289.78,216.54,287.24,213.75,294.32,206.74,298.47,210.81,302.76,213.67,307.8,208.74,302.52,203.59,306.81,200.8,307.16,197.91,313.04,199.41,315.55,199.41,315.43,197.66,312.17,196.48,310.27,197.08,304.62,192.47,301.44,192.7,296.11,187.11,293.86,187.58,291.81,185.27,287.93,184.59,279.72,179.7,271.59,178.43,263.91,174.25,262.62,171.85,262.62,168.51,260.33,168.51,258.46,165.67,254.7,163.74,251.03,159.79,252.45,156.7,252.89,151.19,257.33,148.79,259.56,146.49,254.74,142.59,251.19,142.12,248.75,140.06,248.78,137.6,246.95,135.2,245.02,135.2,244.33,136.56,242.04,137.85,240.28,136.56,236.88,132.65,234.93,128.92,232.7,128.92,229.85,131.59,228.04,131.91,225.08,129.79,224.01,132.83,220.84,132.51,219.9,133.64,218.01,133.86,215.05,133.12,210.91,133.73,210.51,137.41,207.3,137.41,205.52,138.37,205.52,140.93,204.86,142.72,203.2,145.25,200.91,146.83,194.13,146.83,193.33,149.5,191.04,150.41,189.92,149.36,188.66,149.36,187.26,150.51,183.68,150.51,180.99,153.18,179.04,153.81,172.93,152.98,171.38,152.1,168.97,149.92,168.03,147.22,162.96,141.64,162.96,139.28,161.9,137.72,158.99,138.78,157.86,138.07,155.25,139.32,153.5,139.02,148.14,144.63,147.38,144.63,146.01,143.81,145.14,144.28,144.6,146.7,142.78,145.82,142.12,146.27,141.72,149.64,140.43,151.75,135.54,155.55,132.27,159.78,128.36,163.53,123.83,165.44,122.89,166.51,122.67,167.73,122.98,170.12,122.39,171.32,119.67,174.04,116.19,175.73,113.08,176.87,109.15,177.73,99.33,177.31,95.46,177.54,93.6,178.34,92.44,179.69,90.99,181.52,88.47,183.41,85.41,184.83,81.93,185.73,81.93,190.35,82.78,193.96,84.98,198.96,83.85,201.85,83.04,202.72,85.76,204.51z" },
		{ id: "C5", n: "5) Castilla", d: "M381.75,66.56,386.75,60.19,381.91,57.24,379.98,56.62,352,58.05,345.66,54.75,342.32,53.83,338.83,54.73,336.38,56.92,332.78,56.67,327.29,62.81,319.95,63.87,317.52,74.34,317.08,86.38,319.23,86.73,319.28,90.29,330.23,90.26,330.24,90.29,331.85,98.23,325.87,110.55,323.96,109.8,321.76,115.24,316.14,114.49,313.16,117.9,314.51,121.7,312.07,124.82,299.58,164.04,289.05,161.08,284.9,171.72,279.72,179.7,287.93,184.59,291.81,185.27,293.86,187.58,296.11,187.11,301.44,192.7,304.62,192.47,310.27,197.08,312.17,196.48,315.43,197.66,315.55,199.41,313.04,199.41,307.16,197.91,306.81,200.8,302.52,203.59,307.8,208.74,302.76,213.67,298.47,210.81,294.32,206.74,287.24,213.75,289.78,216.54,286.83,219.44,287.32,221.69,286.68,224.81,281.86,230.67,282.01,235.08,298.94,247.79,295.37,255.48,294.55,260.78,304.06,265.8,314.75,267.28,331.77,196.27,331.93,194.33,332.36,187.92,332.71,186.09,333.43,184.36,334.48,183.06,339.58,178.83,341.74,176.82,343.17,174.58,344.01,171.09,344.6,164.78,345.05,162.37,346.1,159.75,348.08,157.1,350.92,154.82,353.13,152.63,354.68,149.95,356.53,142.36,357.48,140.35,358.8,138.82,360.69,137.36,363.8,135.68,366.73,133.87,369.07,131.98,370.48,130.06,371.72,125.43,372.71,122.86,376.96,114.86,378.21,109.73,381.65,101.5,382.94,96.31,382.59,91.43,381.73,83.77,381.99,74.98,380.79,70.6,380.89,68.38,381.75,66.56z" },
		{ id: "C6", n: "6) Doce de Octubre", d: "M259.56,146.49,257.33,148.79,252.89,151.19,252.45,156.7,251.03,159.79,254.7,163.74,258.46,165.67,260.33,168.51,262.62,168.51,262.62,171.85,263.91,174.25,271.59,178.43,279.72,179.7,284.9,171.72,289.05,161.08,299.58,164.04,312.07,124.82,314.51,121.7,313.16,117.9,316.14,114.49,321.76,115.24,323.96,109.8,325.87,110.55,331.85,98.23,330.24,90.29,319.28,90.29,319.23,86.73,317.08,86.38,317.52,74.34,319.95,63.87,302.67,62.66,298.24,61.25,295.3,63.61,287.56,64.69,275.77,70.29,268.58,68.97,261.06,69.53,257.93,67.83,253.9,69.96,253.9,73.15,251.72,75.84,251.4,77.14,255.82,80.82,256.66,82.11,256.14,85.53,259.8,87.83,264.72,90.16,265.51,93.99,264.82,97.04,263.77,99.66,262.03,99.96,259.1,99.28,256.43,99.73,254.92,100.85,253.81,102.89,253.81,109.34,255.15,110.97,254.82,113.64,252.46,116,251.75,121.76,253.62,123.21,253.93,124.95,251.68,127.44,251.15,130.66,248.46,131.74,245.81,133.67,245.02,135.2,246.95,135.2,248.78,137.6,248.75,140.06,251.19,142.12,254.74,142.59,259.56,146.49z" }
	];
	var uStates = {};
	var random_value = false;
	uStates.draw = function (id, data, toolTip) {
		
		function mouseOver(d) {
			d3.select("#tooltip").transition().duration(200).style("opacity", .9);
			d3.select("#tooltip").html(toolTip(d.n, data[d.id]))
				.style("left", (d3.event.pageX) + "px")
				.style("top", (d3.event.pageY - 28) + "px");
		}

		function mouseOut() {
			d3.select("#tooltip").transition().duration(500).style("opacity", 0);
		}
		col = d3.select("#mapa");
		bounds_div = col.node().getBoundingClientRect();
		height_svg = bounds_div.height;
		scale = height_svg/700;
		svg = col.append("svg") .attr("width", 600*scale).attr("height", height_svg).attr("id", "mapa_svg")
		g= svg.append("g").attr("transform", "scale(" + scale + ")");
		//d3.select('#tooltip').raise();
		// mapa = d3.select(id).selectAll(".state")
		
		mapa = g.selectAll(".state")
			.data(uStatePaths).enter().append("path").attr("class", "state").attr("d", function (d) { return d.d; })
			.style("fill", function (d) {
				if (!random_value) {
					return ods[data[d.id].first].color;
				} else {
					var random = Math.floor(Math.random() * (+4 - +1)) + +1;
					if (random == 1) {
						return ods[data[d.id].first].color;
					} else if (random == 2) {
						return ods[data[d.id].second].color;
					} else {
						return ods[data[d.id].third].color;
					}
				}
			})
			.on("mouseover", mouseOver).on("mouseout", mouseOut);
	}
	//d3.selectAll("#mapa_svg").attr("transform", d3.transform().scale(d => height_svg/900)); 
	this.uStates = uStates;
})();

